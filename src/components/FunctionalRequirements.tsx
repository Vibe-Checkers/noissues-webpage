import React from 'react';
import { FolderOpen, FileSearch, Wrench, FileCode, Container, PlayCircle, CheckCircle, Package } from 'lucide-react';

export function FunctionalRequirements() {
  const requirements = [
    {
      category: 'Input & Detection',
      icon: FolderOpen,
      color: 'blue',
      items: [
        {
          title: 'Repository Intake',
          description: 'Accept repository as local path or cloned directory with optional issue metadata'
        },
        {
          title: 'Project Detection',
          description: 'Identify ecosystems via manifests (package.json, requirements.txt, pom.xml, etc.)'
        },
        {
          title: 'Dependency Inference',
          description: 'Infer language runtimes, build tools, and OS packages from project configuration'
        }
      ]
    },
    {
      category: 'Planning & Generation',
      icon: FileCode,
      color: 'purple',
      items: [
        {
          title: 'Dockerfile Generation',
          description: 'Produce Dockerfile with base image, dependencies, build steps, and test commands'
        },
        {
          title: 'Reproduction Plan',
          description: 'Encode multi-step reproduction workflow with helper scripts if needed'
        }
      ]
    },
    {
      category: 'Execution & Verification',
      icon: Container,
      color: 'emerald',
      items: [
        {
          title: 'Container Build',
          description: 'Build container image and capture build logs, exit status, and error traces'
        },
        {
          title: 'Issue Verification',
          description: 'Execute reproduction commands, capture outputs, and collect test artifacts'
        },
        {
          title: 'Reproduction Verdict',
          description: 'Determine success/failure via test outcomes, exit codes, and error patterns'
        }
      ]
    },
    {
      category: 'Output & Packaging',
      icon: Package,
      color: 'amber',
      items: [
        {
          title: 'Result Packaging',
          description: 'Bundle Dockerfile, logs, commands, and verdict summary with failure stage details'
        }
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: {
      bg: 'from-blue-900/20 to-blue-800/20',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20'
    },
    purple: {
      bg: 'from-purple-900/20 to-purple-800/20',
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20'
    },
    emerald: {
      bg: 'from-emerald-900/20 to-emerald-800/20',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    amber: {
      bg: 'from-amber-900/20 to-amber-800/20',
      border: 'border-amber-500/20',
      text: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20'
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Functional Requirements</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Core capabilities that enable automatic containerized issue reproduction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {requirements.map((req, idx) => {
            const colors = colorMap[req.color];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.iconBg} rounded-lg border`}>
                    <req.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-2xl ${colors.text}`}>{req.category}</h3>
                </div>
                <div className="space-y-4">
                  {req.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30"
                    >
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <h3 className="text-2xl mb-6 text-white text-center">System Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-3">
                <FileCode className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white mb-2">Deterministic</h4>
              <p className="text-sm text-slate-400">
                Dockerfiles ensure identical reproduction across any environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-white mb-2">Automated</h4>
              <p className="text-sm text-slate-400">
                Minimal human effort from analysis to verification
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
                <Package className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-white mb-2">Portable</h4>
              <p className="text-sm text-slate-400">
                Self-contained packages enable easy sharing and reuse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
