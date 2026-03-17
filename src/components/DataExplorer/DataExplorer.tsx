import React, { useState, useEffect } from 'react';
import './DataExplorer.css';
import {
	getBatchRuns,
	getRunsByBatch,
	getIterationsByRun,
	getStepsByIteration,
	getVerifyDetailByStep,
	getArtifactsByRun
} from '../../services/mockData';
import {
	BatchRun,
	Run,
	Iteration,
	Step,
	VerifyBuildDetail,
	RunArtifact
} from '../../types/database';
import { ChevronRight, Database, Box, Play, CheckCircle2, XCircle, FileCode, Search, Loader2 } from 'lucide-react';

type ViewState =
	| { type: 'batch-list' }
	| { type: 'run-list', batch: BatchRun }
	| { type: 'run-detail', run: Run, batch: BatchRun }
	| { type: 'iteration-detail', iteration: Iteration, run: Run, batch: BatchRun };

const DataExplorer: React.FC<{ onBack: () => void }> = ({ onBack }) => {
	const [viewState, setViewState] = useState<ViewState>({ type: 'batch-list' });
	const [isLoading, setIsLoading] = useState(false);

	// States for fetched data
	const [batches, setBatches] = useState<BatchRun[]>([]);
	const [runs, setRuns] = useState<Run[]>([]);
	const [iterations, setIterations] = useState<Iteration[]>([]);
	const [artifacts, setArtifacts] = useState<RunArtifact[]>([]);
	const [steps, setSteps] = useState<Step[]>([]);
	const [verifyDetails, setVerifyDetails] = useState<Record<string, VerifyBuildDetail | undefined>>({});

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				if (viewState.type === 'batch-list') {
					const data = await getBatchRuns();
					setBatches(data);
				} else if (viewState.type === 'run-list') {
					const data = await getRunsByBatch(viewState.batch.id);
					setRuns(data);
				} else if (viewState.type === 'run-detail') {
					const [iters, arts] = await Promise.all([
						getIterationsByRun(viewState.run.id),
						getArtifactsByRun(viewState.run.id)
					]);
					setIterations(iters);
					setArtifacts(arts);
				} else if (viewState.type === 'iteration-detail') {
					const iterSteps = await getStepsByIteration(viewState.iteration.id);
					setSteps(iterSteps);

					// Fetch verify details for each step
					const details: Record<string, VerifyBuildDetail | undefined> = {};
					await Promise.all(iterSteps.map(async (step) => {
						details[step.id] = await getVerifyDetailByStep(step.id);
					}));
					setVerifyDetails(details);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [viewState]);

	const renderBreadcrumbs = () => {
		const items = [{ label: 'All Batches', onClick: () => setViewState({ type: 'batch-list' }) }];

		if (viewState.type === 'run-list' || viewState.type === 'run-detail' || viewState.type === 'iteration-detail') {
			items.push({
				label: `Batch: ${viewState.batch.id}`,
				onClick: () => setViewState({ type: 'run-list', batch: viewState.batch })
			});
		}

		if (viewState.type === 'run-detail' || viewState.type === 'iteration-detail') {
			items.push({
				label: `Run: ${viewState.run.repo_slug}`,
				onClick: () => setViewState({ type: 'run-detail', run: viewState.run, batch: viewState.batch })
			});
		}

		if (viewState.type === 'iteration-detail') {
			items.push({
				label: `Iteration ${viewState.iteration.iteration_number}`,
				onClick: () => { }
			});
		}

		return (
			<nav className="breadcrumb-nav">
				{items.map((item, index) => (
					<React.Fragment key={index}>
						<div
							className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
							onClick={item.onClick}
						>
							{index === 0 && <Database size={16} />}
							{item.label}
						</div>
						{index < items.length - 1 && <ChevronRight size={14} className="text-slate-600" />}
					</React.Fragment>
				))}
			</nav>
		);
	};

	const LoadingOverlay = () => (
		<div className="flex flex-col items-center justify-center py-24 fade-in">
			<Loader2 size={48} className="text-sky-400 animate-spin mb-4" />
			<p className="text-slate-400 font-medium">Querying database...</p>
		</div>
	);

	const BatchRunList = () => {
		return (
			<div className="data-grid fade-in">
				{batches.map(batch => (
					<div
						key={batch.id}
						className="data-card"
						onClick={() => setViewState({ type: 'run-list', batch })}
					>
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-lg font-semibold text-sky-400">{batch.id}</h3>
							<Box size={20} className="text-slate-500" />
						</div>
						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-slate-400">Started:</span>
								<span>{new Date(batch.started_at).toLocaleString()}</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-slate-400">Repos:</span>
								<span>{batch.repo_count}</span>
							</div>
							<div className="metric-grid">
								<div className="metric-item">
									<span className="metric-label">Success</span>
									<span className="metric-value text-green-400">{batch.success_count || 0}</span>
								</div>
								<div className="metric-item">
									<span className="metric-label">Running</span>
									<span className="metric-value text-sky-400">{batch.running_count || 0}</span>
								</div>
								<div className="metric-item">
									<span className="metric-label">Failure</span>
									<span className="metric-value text-red-400">{batch.failure_count || 0}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const RunList = ({ batch }: { batch: BatchRun }) => {
		return (
			<div className="data-grid fade-in">
				{runs.map(run => (
					<div
						key={run.id}
						className="data-card"
						onClick={() => setViewState({ type: 'run-detail', run, batch })}
					>
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-md font-semibold text-white truncate w-48">{run.repo_slug}</h3>
								<span className="text-xs text-slate-500">{run.detected_language}</span>
							</div>
							<span className={`status-badge ${run.status === 'success' ? 'status-success' : 'status-failure'}`}>
								{run.status}
							</span>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-slate-400">Duration:</span>
								<span>{run.duration_ms ? `${(run.duration_ms / 1000).toFixed(1)}s` : 'N/A'}</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-slate-400">Iterations:</span>
								<span>{run.iteration_count}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const RunDetail = ({ run, batch }: { run: Run, batch: BatchRun }) => {
		return (
			<div className="detail-view fade-in">
				<aside className="sidebar space-y-6">
					<div className="explorer-glass-panel">
						<h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Run Information</h4>
						<div className="space-y-3">
							<div className="metric-item">
								<span className="metric-label">Repository URL</span>
								<a href={run.repo_url} target="_blank" rel="noreferrer" className="text-xs text-sky-400 hover:underline break-all">
									{run.repo_url}
								</a>
							</div>
							<div className="metric-item">
								<span className="metric-label">Verify Score</span>
								<span className={`metric-value ${run.verify_score && run.verify_score > 80 ? 'text-green-400' : 'text-yellow-400'}`}>
									{run.verify_score ?? 'N/A'}
								</span>
							</div>
							<div className="metric-item">
								<span className="metric-label">Total Steps</span>
								<span className="metric-value">{run.total_steps}</span>
							</div>
						</div>
					</div>

					<div className="explorer-glass-panel">
						<h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Artifacts</h4>
						<div className="space-y-2">
							{artifacts.map(art => (
								<div key={art.id} className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 cursor-pointer">
									<FileCode size={16} className="text-sky-400" />
									<span className="text-sm truncate">{art.file_name}</span>
								</div>
							))}
						</div>
					</div>
				</aside>

				<section className="content-area space-y-6">
					<h2 className="text-2xl font-bold flex items-center gap-2">
						Iterations <span className="text-slate-600">({iterations.length})</span>
					</h2>
					<div className="space-y-4">
						{iterations.map(iter => (
							<div
								key={iter.id}
								className="explorer-glass-panel hover:border-sky-500/50 transition-colors cursor-pointer"
								onClick={() => setViewState({ type: 'iteration-detail', iteration: iter, run, batch })}
							>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sky-400">
											{iter.iteration_number}
										</div>
										<div>
											<h5 className="font-semibold">Iteration {iter.iteration_number}</h5>
											<span className="text-xs text-slate-500">{iter.status}</span>
										</div>
									</div>
									<div className="flex gap-4">
										<div className="text-right">
											<span className="text-xs text-slate-500 block">Steps</span>
											<span className="font-mono">{iter.step_count}</span>
										</div>
										<div className="text-right">
											<span className="text-xs text-slate-500 block">Tokens</span>
											<span className="font-mono">{iter.prompt_tokens + iter.completion_tokens}</span>
										</div>
										<ChevronRight className="text-slate-600 self-center" />
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		);
	};

	const IterationDetail = () => {
		return (
			<div className="space-y-6 fade-in">
				<h2 className="text-2xl font-bold">Steps for Iteration {viewState.type === 'iteration-detail' ? viewState.iteration.iteration_number : ''}</h2>
				<div className="space-y-4">
					{steps.map(step => {
						const verify = verifyDetails[step.id];
						return (
							<div key={step.id} className="explorer-glass-panel border-l-4 border-l-sky-500">
								<div className="flex justify-between mb-4">
									<div className="flex items-center gap-2">
										<span className="text-xl font-bold text-slate-700">#{step.step_number}</span>
										<h5 className="font-semibold text-sky-300">{step.tool_name}</h5>
									</div>
									<span className="text-xs text-slate-500 font-mono">
										{step.duration_ms ? `${(step.duration_ms / 1000).toFixed(1)}s` : ''}
									</span>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<span className="text-xs font-bold uppercase text-slate-600">Thought</span>
										<p className="text-sm text-slate-300 italic">"{step.thought}"</p>
									</div>
									<div className="space-y-2">
										<span className="text-xs font-bold uppercase text-slate-600">Tool Input</span>
										<pre className="text-xs bg-black/40 p-2 rounded overflow-x-auto text-emerald-400">
											{step.tool_input}
										</pre>
									</div>
								</div>

								{verify && (
									<div className="mt-4 pt-4 border-t border-slate-700/50">
										<div className="flex items-center gap-2 mb-2">
											<CheckCircle2 size={16} className="text-green-500" />
											<span className="text-sm font-bold text-green-500">Verification Result</span>
										</div>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											<div className="metric-item">
												<span className="metric-label">Build Success</span>
												<span className={`text-sm ${verify.build_success ? 'text-green-400' : 'text-red-400'}`}>
													{verify.build_success ? 'YES' : 'NO'}
												</span>
											</div>
											<div className="metric-item">
												<span className="metric-label">Smoke Test</span>
												<span className={`text-sm ${verify.smoke_passed ? 'text-green-400' : 'text-red-400'}`}>
													{verify.smoke_passed ? 'PASSED' : 'FAILED'}
												</span>
											</div>
											<div className="col-span-2 metric-item">
												<span className="metric-label">Review Score</span>
												<span className="text-sm">{verify.review_score}/100</span>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<div className="data-explorer-container">
			<div className="max-w-7xl mx-auto">
				<header className="flex justify-between items-center mb-10">
					<div className="flex items-center gap-6">
						<button
							onClick={onBack}
							className="bg-slate-800/40 hover:bg-sky-500/20 text-sky-400 p-2.5 rounded-xl border border-slate-700/50 transition-all hover:border-sky-500/50 group"
							title="Back to Landing"
						>
							<ChevronRight size={22} className="rotate-180 group-hover:-translate-x-0.5 transition-transform" />
						</button>
						<div>
							<h1 className="text-4xl font-black bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
								BuildAgent v2.0
							</h1>
							<p className="text-slate-500 font-medium tracking-tight">System Logs & Data Explorer</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="relative group">
							<Search className="absolute left-3.5 top-3 text-slate-500 group-focus-within:text-sky-400 transition-colors" size={18} />
							<input
								type="text"
								placeholder="Search repositories..."
								className="bg-slate-900/40 border border-slate-700/50 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 transition-all w-72 placeholder:text-slate-600 font-medium"
							/>
						</div>
					</div>
				</header>

				{renderBreadcrumbs()}

				<main>
					{isLoading ? <LoadingOverlay /> : (
						<>
							{viewState.type === 'batch-list' && <BatchRunList />}
							{viewState.type === 'run-list' && <RunList batch={viewState.batch} />}
							{viewState.type === 'run-detail' && <RunDetail run={viewState.run} batch={viewState.batch} />}
							{viewState.type === 'iteration-detail' && <IterationDetail />}
						</>
					)}
				</main>
			</div>
		</div>
	);
};

export default DataExplorer;
