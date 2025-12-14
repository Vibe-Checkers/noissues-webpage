import React from 'react';
import { Hammer, Container, Wrench, PlayCircle, Package, FileText } from 'lucide-react';

export function BuilderAgent() {
  const phases = [
    {
      number: 1,
      title: 'Environment Initialization',
      description: 'Setup Docker sandbox with appropriate base image and resource limits',
      icon: Container,
      details: ['Repository mounting at /workspace', 'Base image selection', 'Resource limits applied']
    },
    {
      number: 2,
      title: 'Tooling Interface',
      description: 'Expose safe command execution tools to the LLM agent',
      icon: Wrench,
      details: ['ExecuteCommand with safety checks', 'SetEnvironmentVariable', 'GetBuildStatus', 'ProvisionPackages']
    },
    {
      number: 3,
      title: 'ReAct Execution Loop',
      description: 'Agent executes build using Thought-Action-Observation cycles',
      icon: PlayCircle,
      details: ['Version checks', 'Dependency installation', 'Build commands', 'Test execution']
    },
    {
      number: 4,
      title: 'Dynamic Provisioning',
      description: 'Add missing tools on-demand without restarting from scratch',
      icon: Package,
      details: ['Detect missing dependencies', 'Rebuild Docker image', 'Resume execution']
    },
    {
      number: 5,
      title: 'Logging & Verification',
      description: 'Comprehensive logs and integrity checks for reproducibility',
      icon: FileText,
      details: ['Per-command logs', 'Full trace recording', 'Integrity validation']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-blue-100 rounded-2xl">
            <Hammer className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl">Builder Agent</h2>
            <p className="text-slate-600 text-lg">Execution & Build Automation Phase</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-200">
          <h3 className="text-xl mb-4">Inputs</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-blue-600 mb-1">Repository Path</p>
              <p className="text-sm text-slate-600">Local path or GitHub URL to clone</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-blue-600 mb-1">Build Instructions</p>
              <p className="text-sm text-slate-600">Detailed document from Planner Agent</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-blue-600 mb-1">System Prompt</p>
              <p className="text-sm text-slate-600">Builder role and execution policies</p>
            </div>
          </div>
        </div>

        {/* Five Phases */}
        <div className="mb-8">
          <h3 className="text-2xl mb-6">Five-Phase Execution Pipeline</h3>
          <div className="space-y-6">
            {phases.map((phase) => (
              <div key={phase.number} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        Phase {phase.number}
                      </span>
                      <h4 className="text-xl">{phase.title}</h4>
                    </div>
                    <p className="text-slate-600 mb-3">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.details.map((detail, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-200">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ReAct Loop Detail */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl mb-6">ReAct-Based Execution Loop</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 text-xl">💭</div>
              <p className="text-sm">Thought</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 text-xl">⚡</div>
              <p className="text-sm">Action</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 text-xl">📊</div>
              <p className="text-sm">Observation</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 text-xl">✓</div>
              <p className="text-sm">Loop or Complete</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            The agent iteratively thinks about the next step, executes an action using available tools, 
            observes the result, and decides whether to continue or complete the build process.
          </p>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl mb-4">Output: Execution Artifacts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h4 className="mb-3">Execution Result</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Success/failure status</li>
                <li>• Build summary with statistics</li>
                <li>• Token usage and performance metrics</li>
                <li>• Error messages and diagnostics</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h4 className="mb-3">Log Bundle</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Per-command execution logs</li>
                <li>• Complete agent trace</li>
                <li>• Integrity validation report</li>
                <li>• Reproducible artifact package</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-blue-100">
              All artifacts are persisted for downstream consumption by the Issue Verifier Agent and manual analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
