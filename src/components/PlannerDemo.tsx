import React, { useState, useEffect } from 'react';
import { FolderOpen, Package, Wrench, FileText, CheckCircle, Loader2, Terminal } from 'lucide-react';

interface PlannerDemoProps {
  repositoryUrl: string;
}

export function PlannerDemo({ repositoryUrl }: PlannerDemoProps) {
  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  const steps = [
    {
      number: 1,
      title: 'Repository Intake',
      description: 'Accepting repository and analyzing structure',
      icon: FolderOpen,
      duration: 2000,
      logs: [
        `Cloning repository: ${repositoryUrl}`,
        'Repository successfully cloned',
        'Scanning directory structure...',
        'Found 47 files across 12 directories'
      ]
    },
    {
      number: 2,
      title: 'Project Detection',
      description: 'Identifying project ecosystem and dependencies',
      icon: Package,
      duration: 3000,
      logs: [
        'Analyzing configuration files...',
        'Found package.json - Node.js project detected',
        'Found pyproject.toml - Python project detected',
        'Multi-language project identified',
        'Primary ecosystem: Node.js (TypeScript)',
        'Secondary ecosystem: Python 3.11+'
      ]
    },
    {
      number: 3,
      title: 'Dependency Inference',
      description: 'Inferring required runtimes and build tools',
      icon: Wrench,
      duration: 3500,
      logs: [
        'Parsing package.json dependencies...',
        'Node.js >= 18.0.0 required',
        'npm or yarn package manager needed',
        'Analyzing Python dependencies...',
        'Python 3.11+ runtime required',
        'pip package manager needed',
        'Build tools: TypeScript compiler, ESLint',
        'OS packages: git, curl, build-essential'
      ]
    },
    {
      number: 4,
      title: 'Dockerfile Generation',
      description: 'Creating executable Dockerfile specification',
      icon: FileText,
      duration: 2500,
      logs: [
        'Selecting base image: node:18-alpine',
        'Adding Python runtime layer',
        'Writing dependency installation steps...',
        'Configuring build commands...',
        'Setting up test execution...',
        'Dockerfile generated successfully',
        '✓ Environment specification ready for verification'
      ]
    }
  ];

  useEffect(() => {
    // Start the sequence after a brief delay
    const startDelay = setTimeout(() => {
      setActiveStep(0);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (activeStep < 0 || activeStep >= steps.length) return;

    const currentStep = steps[activeStep];
    let logIndex = 0;

    // Add logs progressively
    const logInterval = setInterval(() => {
      if (logIndex < currentStep.logs.length) {
        setLogs(prev => [...prev, currentStep.logs[logIndex]]);
        logIndex++;
      }
    }, currentStep.duration / currentStep.logs.length);

    // Move to next step after duration
    const stepTimer = setTimeout(() => {
      setCompletedSteps(prev => [...prev, activeStep]);
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    }, currentStep.duration);

    return () => {
      clearInterval(logInterval);
      clearTimeout(stepTimer);
    };
  }, [activeStep]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-700/50">
        <h3 className="text-2xl mb-8 text-white text-center">Planner Agent Progress</h3>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                      completedSteps.includes(index)
                        ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/50'
                        : index === activeStep
                        ? 'bg-purple-500 border-purple-400 scale-110 shadow-lg shadow-purple-500/50 animate-pulse'
                        : 'bg-slate-700 border-slate-600'
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : index === activeStep ? (
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    ) : (
                      <step.icon className="w-6 h-6 text-slate-400" />
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
                        completedSteps.includes(index) ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        {activeStep >= 0 && activeStep < steps.length && (
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
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
          </div>
        )}
      </div>

      {/* Live Logs */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-5 h-5 text-emerald-400" />
          <h3 className="text-xl text-white">Live Logs</h3>
        </div>
        <div className="bg-slate-950 rounded-xl p-4 border border-slate-700/30 font-mono text-sm max-h-96 overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-slate-500">Waiting for logs...</div>
          ) : (
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="text-slate-300 animate-fade-in"
                  style={{ animationDelay: '0ms' }}
                >
                  <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>{' '}
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Completion Message */}
      {completedSteps.length === steps.length && (
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-8 border border-purple-500/50 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-white">Planning Complete!</h3>
              <p className="text-purple-100">Dockerfile generated and ready for verification</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
            <p className="text-sm text-purple-100">
              <strong>Next Step:</strong> The generated Dockerfile will be passed to the Verifier Agent 
              for container build and issue reproduction.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
