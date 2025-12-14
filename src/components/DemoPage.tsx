import React, { useState } from 'react';
import { ArrowLeft, Github, Play, Loader2 } from 'lucide-react';
import { PlannerDemo } from './PlannerDemo';

interface DemoPageProps {
  onBack: () => void;
}

export function DemoPage({ onBack }: DemoPageProps) {
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repositoryUrl.trim()) return;
    
    setIsRunning(true);
    setHasStarted(true);
    
    // Simulate API call - will be replaced with actual backend later
    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-sm bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Overview</span>
            </button>
            <h1 className="text-xl text-white">Live Demo</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Input Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-white mb-4">Try Dockerify Planner</h2>
            <p className="text-slate-400 text-lg">
              Enter a GitHub repository URL to see the automated planning process in action
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <label htmlFor="repo-url" className="block text-white mb-3 text-lg">
                Repository URL
              </label>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Github className="w-5 h-5" />
                  </div>
                  <input
                    id="repo-url"
                    type="text"
                    value={repositoryUrl}
                    onChange={(e) => setRepositoryUrl(e.target.value)}
                    placeholder="https://github.com/username/repository"
                    className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    disabled={isRunning}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isRunning || !repositoryUrl.trim()}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Starting...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Analyze
                    </>
                  )}
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Example: https://github.com/user/project or paste any public GitHub repository
              </p>
            </div>
          </form>
        </div>

        {/* Planner Animation Section */}
        {hasStarted && (
          <div className="animate-fade-in">
            <PlannerDemo repositoryUrl={repositoryUrl} />
          </div>
        )}

        {/* Placeholder when not started */}
        {!hasStarted && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700/30 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
                <Github className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl text-slate-400 mb-2">Ready to analyze</h3>
              <p className="text-slate-500">
                Enter a repository URL above to see the Planner Agent in action
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
