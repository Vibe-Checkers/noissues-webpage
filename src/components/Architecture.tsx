import React from 'react';
import { FileCode, Container } from 'lucide-react';

export function Architecture() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Two-Stage Architecture</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Separation of planning from execution ensures generality across heterogeneous repositories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Planner Agent */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/30 transition-all">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <FileCode className="w-8 h-8" />
                <h3 className="text-2xl">Planner Agent</h3>
              </div>
              <p className="text-purple-100">Environment & Execution Planning</p>
            </div>
            <div className="p-6">
              <p className="text-slate-300 mb-4">
                Analyzes project structure, infers environment requirements, and produces a deterministic 
                Dockerfile that encodes the complete setup and execution plan.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm flex-shrink-0 border border-purple-500/30">1</div>
                  <p className="text-sm text-slate-400">Analyze repository structure & artifacts</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm flex-shrink-0 border border-purple-500/30">2</div>
                  <p className="text-sm text-slate-400">Detect ecosystems & dependencies</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm flex-shrink-0 border border-purple-500/30">3</div>
                  <p className="text-sm text-slate-400">Infer runtime & tool requirements</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm flex-shrink-0 border border-purple-500/30">4</div>
                  <p className="text-sm text-slate-400">Generate executable Dockerfile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verifier Agent */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Container className="w-8 h-8" />
                <h3 className="text-2xl">Verifier Agent</h3>
              </div>
              <p className="text-emerald-100">Build & Reproduction Verification</p>
            </div>
            <div className="p-6">
              <p className="text-slate-300 mb-4">
                Builds the container image, executes reproduction steps in isolation, and produces 
                auditable logs with a clear verdict on issue reproducibility.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm flex-shrink-0 border border-emerald-500/30">1</div>
                  <p className="text-sm text-slate-400">Build container from Dockerfile</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm flex-shrink-0 border border-emerald-500/30">2</div>
                  <p className="text-sm text-slate-400">Execute reproduction commands</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm flex-shrink-0 border border-emerald-500/30">3</div>
                  <p className="text-sm text-slate-400">Observe failure signals & artifacts</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm flex-shrink-0 border border-emerald-500/30">4</div>
                  <p className="text-sm text-slate-400">Generate reproduction verdict</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Flow */}
        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
          <h3 className="text-2xl mb-6 text-center text-white">System Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-2">
                <FileCode className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-sm text-slate-300">Analyze & Plan</p>
            </div>
            <div className="text-2xl text-slate-600 rotate-90 md:rotate-0">→</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2">
                <Container className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-300">Build & Verify</p>
            </div>
            <div className="text-2xl text-slate-600 rotate-90 md:rotate-0">→</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                <div className="text-2xl">📦</div>
              </div>
              <p className="text-sm text-slate-300">Portable Package</p>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            Final output: Dockerfile + logs + reproduction verdict = auditable, portable reproduction package
          </p>
        </div>
      </div>
    </section>
  );
}
