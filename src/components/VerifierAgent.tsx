import React from 'react';
import { Container, Hammer, PlayCircle, FileSearch, Package } from 'lucide-react';

export function VerifierAgent() {
  const steps = [
    {
      icon: Hammer,
      title: 'Container Build',
      description: 'Build container image from the generated Dockerfile',
      details: ['Image compilation', 'Build log capture', 'Error trace collection']
    },
    {
      icon: PlayCircle,
      title: 'Execution',
      description: 'Run reproduction commands inside isolated container',
      details: ['Execute test suite', 'Capture stdout/stderr', 'Monitor exit codes']
    },
    {
      icon: FileSearch,
      title: 'Observation',
      description: 'Observe failure signals and collect artifacts',
      details: ['Test outcome analysis', 'Error pattern matching', 'Artifact collection']
    },
    {
      icon: Package,
      title: 'Verdict',
      description: 'Generate reproduction verdict and package results',
      details: ['Success/failure determination', 'Structured logs', 'Result packaging']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
            <Container className="w-10 h-10 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl text-white">Verifier Agent</h2>
            <p className="text-slate-400 text-lg">Build & Reproduction Verification</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl mb-8 border border-slate-700/50 shadow-xl">
          <h3 className="text-xl mb-4 text-white">Inputs</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30">
              <p className="text-emerald-400 mb-1">Generated Dockerfile</p>
              <p className="text-sm text-slate-400">Complete environment specification from Planner</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30">
              <p className="text-emerald-400 mb-1">Repository Context</p>
              <p className="text-sm text-slate-400">Source code and auxiliary scripts</p>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-8">
          <h3 className="text-2xl mb-6 text-white">Verification Process</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 text-white">{step.title}</h4>
                    <p className="text-slate-400 text-sm mb-3">{step.description}</p>
                    <div className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                          <p className="text-xs text-slate-500">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reproduction Signals */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 mb-8 border border-slate-700/50">
          <h3 className="text-2xl mb-6 text-white">Reproduction Verdict Signals</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20">
              <div className="text-emerald-400 mb-2">Test Outcomes</div>
              <p className="text-slate-400 text-sm">Failing test results indicate reproduction</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20">
              <div className="text-emerald-400 mb-2">Exit Codes</div>
              <p className="text-slate-400 text-sm">Non-zero exit with expected error patterns</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20">
              <div className="text-emerald-400 mb-2">Error Messages</div>
              <p className="text-slate-400 text-sm">Presence of known failure signatures</p>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl shadow-2xl border border-emerald-500/50">
          <h3 className="text-2xl mb-6">Output: Reproduction Package</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="mb-3">Verdict & Metadata</h4>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>• Clear success/failure status</li>
                <li>• Failure stage identification</li>
                <li>• Reproduction confidence level</li>
                <li>• Execution timestamps</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="mb-3">Artifacts Bundle</h4>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>• Generated Dockerfile</li>
                <li>• Build and execution logs</li>
                <li>• Test reports and outputs</li>
                <li>• Captured error traces</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="text-sm text-emerald-100">
              <strong>Portable & Auditable:</strong> The complete package enables anyone to re-run the same 
              reproduction scenario and verify the results independently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
