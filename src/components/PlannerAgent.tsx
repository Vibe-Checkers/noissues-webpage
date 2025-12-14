import React, { useState, useEffect } from 'react';
import { FileCode, FolderOpen, Package, Wrench, FileText, CheckCircle } from 'lucide-react';

export function PlannerAgent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const steps = [
    {
      number: 1,
      title: 'Repository Intake',
      description: 'Accept repository path and optional issue metadata',
      icon: FolderOpen,
      details: [
        'Local path or cloned directory',
        'Issue text or reproduction hints',
        'Target test or failing command'
      ]
    },
    {
      number: 2,
      title: 'Project Detection',
      description: 'Identify project ecosystems by inspecting configuration files',
      icon: Package,
      details: [
        'package.json, requirements.txt',
        'pom.xml, build.gradle, go.mod',
        'Cargo.toml, pyproject.toml'
      ]
    },
    {
      number: 3,
      title: 'Dependency Inference',
      description: 'Infer required runtimes, build tools, and system packages',
      icon: Wrench,
      details: [
        'Language runtime versions',
        'Compilers and build tools',
        'OS-level dependencies'
      ]
    },
    {
      number: 4,
      title: 'Dockerfile Generation',
      description: 'Produce executable Dockerfile with complete environment setup',
      icon: FileText,
      details: [
        'Base image selection',
        'Dependency installation steps',
        'Deterministic build & test commands'
      ]
    }
  ];

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAnimating, steps.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <FileCode className="w-10 h-10 text-purple-400" />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl text-white">Planner Agent</h2>
            <p className="text-slate-400 text-lg">Environment & Execution Planning</p>
          </div>
        </div>

        {/* Animation Control */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors text-sm"
          >
            {isAnimating ? 'Pause Animation' : 'Resume Animation'}
          </button>
        </div>

        {/* Animated Stepper */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 mb-8 border border-slate-700/50">
          <h3 className="text-2xl mb-8 text-white text-center">Planning Workflow</h3>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                        index === activeStep
                          ? 'bg-purple-500 border-purple-400 scale-110 shadow-lg shadow-purple-500/50'
                          : index < activeStep
                          ? 'bg-purple-600/50 border-purple-500/50'
                          : 'bg-slate-700 border-slate-600'
                      }`}
                    >
                      {index < activeStep && index !== activeStep ? (
                        <CheckCircle className="w-6 h-6 text-purple-200" />
                      ) : (
                        <step.icon
                          className={`w-6 h-6 transition-colors ${
                            index === activeStep ? 'text-white' : 'text-slate-400'
                          }`}
                        />
                      )}
                    </div>
                    <div className="text-xs mt-2 text-center text-slate-400 hidden sm:block">
                      Step {step.number}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-slate-700 mx-2 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500 ${
                          index < activeStep ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 min-h-[200px]">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                {React.createElement(steps[activeStep].icon, {
                  className: 'w-8 h-8 text-purple-400'
                })}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl text-white mb-2">{steps[activeStep].title}</h4>
                <p className="text-slate-300">{steps[activeStep].description}</p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {steps[activeStep].details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <p className="text-sm text-slate-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveStep(index);
                  setIsAnimating(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeStep
                    ? 'bg-purple-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl border border-purple-500/50">
          <h3 className="text-2xl mb-4">Output: Executable Dockerfile</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/30">✓</div>
              <div>
                <p className="text-purple-100">Complete environment specification with base image and runtime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/30">✓</div>
              <div>
                <p className="text-purple-100">OS-level dependencies and tool installation steps</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/30">✓</div>
              <div>
                <p className="text-purple-100">Deterministic dependency installation, build, and test commands</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="text-sm text-purple-100">
              The Dockerfile encodes a portable, reproducible execution plan ready for the Verifier Agent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
