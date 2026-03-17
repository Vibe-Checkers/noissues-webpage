import { neon } from '@neondatabase/serverless';
import { BatchRun, Run, Iteration, Step, VerifyBuildDetail, RunArtifact } from '../types/database';

// Use environment variable for database connection
const DATABASE_URL = "postgresql://neondb_owner:npg_NRtmXhij2JP8@ep-sweet-star-aldiirsj-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

export const getBatchRuns = async (): Promise<BatchRun[]> => {
	const result = await sql`
    SELECT 
      b.*, 
      COUNT(r.id) as repo_count,
      COUNT(CASE WHEN r.status = 'success' THEN 1 END) as success_count,
      COUNT(CASE WHEN r.status = 'failure' THEN 1 END) as failure_count,
      COUNT(CASE WHEN r.status = 'running' THEN 1 END) as running_count
    FROM batch_run b
    LEFT JOIN run r ON b.id = r.batch_id
    GROUP BY b.id
    ORDER BY b.started_at DESC
  `;
	return result as unknown as BatchRun[];
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
