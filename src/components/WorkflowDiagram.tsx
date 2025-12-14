import React from 'react';
import { ArrowRight, Search, Hammer, CheckSquare } from 'lucide-react';

export function WorkflowDiagram() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Three-Agent Pipeline
          </h2>
          <p className="text-lg text-slate-600">
            A coordinated system of specialized LLM agents working together
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Planner Agent */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Planner Agent</h3>
                <p className="text-sm text-blue-700">Investigation & Strategy</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <div className="bg-blue-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Repository analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Build file extraction</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Documentation review</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Generate build instructions</span>
              </div>
            </div>
          </div>

          <ArrowRight className="w-8 h-8 text-slate-400 hidden lg:block flex-shrink-0" />
          <div className="lg:hidden">
            <ArrowRight className="w-8 h-8 text-slate-400 rotate-90" />
          </div>

          {/* Builder Agent */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 rounded-lg p-2">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Builder Agent</h3>
                <p className="text-sm text-green-700">Execution & Automation</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <div className="bg-green-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Docker sandbox setup</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>ReAct execution loop</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Dynamic provisioning</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Build & test execution</span>
              </div>
            </div>
          </div>

          <ArrowRight className="w-8 h-8 text-slate-400 hidden lg:block flex-shrink-0" />
          <div className="lg:hidden">
            <ArrowRight className="w-8 h-8 text-slate-400 rotate-90" />
          </div>

          {/* Issue Verifier Agent */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 rounded-lg p-2">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Issue Verifier</h3>
                <p className="text-sm text-purple-700">Verification & Documentation</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <div className="bg-purple-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Define verification strategy</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-purple-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Reproduce reported issue</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-purple-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Compare with expected behavior</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-purple-600 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                <span>Generate verification report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
