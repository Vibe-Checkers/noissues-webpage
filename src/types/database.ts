export interface BatchRun {
	id: string;
	started_at: string;
	finished_at: string | null;
	worker_count: number;
	repo_count: number;
	success_count: number;
	failure_count: number;
	running_count: number;
	total_prompt_tokens: number;
	total_completion_tokens: number;
	config_json: string | null;
}

export interface Run {
	id: string;
	batch_id: string | null;
	repo_url: string;
	repo_slug: string;
	status: string;
	started_at: string;
	finished_at: string | null;
	duration_ms: number | null;
	iteration_count: number;
	detected_language: string | null;
	repo_type: string | null;
	context_blueprint: string | null;
	blueprint_tokens_prompt: number;
	blueprint_tokens_completion: number;
	blueprint_duration_ms: number | null;
	final_dockerfile: string | null;
	verify_score: number | null;
	smoke_test_passed: boolean | null;
	total_prompt_tokens: number;
	total_completion_tokens: number;
	total_steps: number;
	error_message: string | null;
	worker_id: number | null;
}

export interface Iteration {
	id: string;
	run_id: string;
	iteration_number: number;
	status: string;
	started_at: string;
	finished_at: string | null;
	duration_ms: number | null;
	step_count: number;
	injected_lessons: string | null;
	prompt_tokens: number;
	completion_tokens: number;
	lesson_extraction_tokens_prompt: number;
	lesson_extraction_tokens_completion: number;
	dockerfile_generated: boolean;
	verify_attempted: boolean;
	verify_result: string | null;
	error_message: string | null;
}

export interface Step {
	id: string;
	iteration_id: string;
	step_number: number;
	started_at: string;
	finished_at: string | null;
	duration_ms: number | null;
	thought: string;
	tool_name: string;
	tool_input: string | null;
	tool_output_raw: string | null;
	tool_output: string | null;
	was_summarized: boolean;
	prompt_tokens: number;
	completion_tokens: number;
	summary_prompt_tokens: number;
	summary_completion_tokens: number;
}

export interface VerifyBuildDetail {
	id: string;
	step_id: string;
	review_approved: boolean | null;
	review_score: number | null;
	review_concerns: string | null;
	smoke_test_commands: string | null;
	review_prompt_tokens: number;
	review_completion_tokens: number;
	review_duration_ms: number | null;
	build_attempted: boolean;
	build_success: boolean | null;
	build_duration_ms: number | null;
	build_error_raw: string | null;
	build_error: string | null;
	build_error_summarized: boolean;
	build_error_summary_tokens_prompt: number;
	build_error_summary_tokens_completion: number;
	build_retried: boolean;
	build_retry_reason: string | null;
	smoke_attempted: boolean;
	smoke_passed: boolean | null;
	smoke_results: string | null;
	smoke_duration_ms: number | null;
}

export interface RunArtifact {
	id: string;
	run_id: string;
	artifact_type: string;
	file_name: string;
	content: string | null;
	file_path: string | null;
	created_at: string;
}

export interface ImageCatalog {
	id: string;
	fetched_at: string;
	image_count: number;
	content: string;
}
