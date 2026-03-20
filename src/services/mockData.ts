import { neon } from '@neondatabase/serverless';
import { BatchRun, Run, Iteration, Step, VerifyBuildDetail, RunArtifact } from '../types/database';

// Use environment variable for database connection
const DATABASE_URL = "postgresql://neondb_owner:npg_NRtmXhij2JP8@ep-curly-rain-al6tqu0g-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

export const getBatchRuns = async (): Promise<BatchRun[]> => {
	const result = await sql`
    SELECT 
      b.id,
      b.tag,
      b.ablation,
      b.started_at,
      b.finished_at,
      b.worker_count,
      b.config_json,
      b.repo_count,
      COUNT(CASE WHEN r.status = 'success' THEN 1 END) as success_count,
      COUNT(CASE WHEN r.status = 'failure' THEN 1 END) as failure_count,
      COUNT(CASE WHEN r.status = 'running' THEN 1 END) as running_count,
      COUNT(CASE WHEN r.status = 'waiting' THEN 1 END) as waiting_count
    FROM batch_run b
    LEFT JOIN run r ON b.id = r.batch_id
    GROUP BY b.id, b.tag, b.ablation, b.started_at, b.finished_at, b.worker_count, b.config_json, b.repo_count
    ORDER BY b.started_at DESC
  `;
	return result as unknown as BatchRun[];
};

export const updateBatchTag = async (id: string, tag: string): Promise<void> => {
	await sql`UPDATE batch_run SET tag = ${tag} WHERE id = ${id}`;
};

export const deleteBatchRun = async (id: string): Promise<void> => {
	// Cascade deletes manually for safety if foreign keys don't have ON DELETE CASCADE
	// We delete from bottom up: verify_build_detail -> step -> iteration -> run_artifact -> run -> batch_run

	await sql`
		DELETE FROM verify_build_detail WHERE step_id IN (
			SELECT s.id FROM step s 
			JOIN iteration i ON s.iteration_id = i.id 
			JOIN run r ON i.run_id = r.id 
			WHERE r.batch_id = ${id}
		)
	`;
	await sql`
		DELETE FROM step WHERE iteration_id IN (
			SELECT i.id FROM iteration i 
			JOIN run r ON i.run_id = r.id 
			WHERE r.batch_id = ${id}
		)
	`;
	await sql`
		DELETE FROM iteration WHERE run_id IN (
			SELECT r.id FROM run r 
			WHERE r.batch_id = ${id}
		)
	`;
	await sql`
		DELETE FROM run_artifact WHERE run_id IN (
			SELECT r.id FROM run r 
			WHERE r.batch_id = ${id}
		)
	`;
	await sql`DELETE FROM run WHERE batch_id = ${id}`;
	await sql`DELETE FROM batch_run WHERE id = ${id}`;
};

export const getRunsByBatch = async (batchId: string): Promise<Run[]> => {
	const result = await sql`SELECT * FROM run WHERE batch_id = ${batchId} ORDER BY started_at ASC`;
	return result as unknown as Run[];
};

export const getIterationsByRun = async (runId: string): Promise<Iteration[]> => {
	const result = await sql`SELECT * FROM iteration WHERE run_id = ${runId} ORDER BY iteration_number ASC`;
	return result as unknown as Iteration[];
};

export const getStepsByIteration = async (iterId: string): Promise<Step[]> => {
	const result = await sql`SELECT * FROM step WHERE iteration_id = ${iterId} ORDER BY step_number ASC`;
	return result as unknown as Step[];
};

export const getVerifyDetailByStep = async (stepId: string): Promise<VerifyBuildDetail | undefined> => {
	const result = await sql`SELECT * FROM verify_build_detail WHERE step_id = ${stepId} LIMIT 1`;
	return (result[0] as unknown as VerifyBuildDetail) || undefined;
};

export const getArtifactsByRun = async (runId: string): Promise<RunArtifact[]> => {
	const result = await sql`SELECT * FROM run_artifact WHERE run_id = ${runId} ORDER BY created_at ASC`;
	return result as unknown as RunArtifact[];
};
