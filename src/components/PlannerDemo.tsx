import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FolderOpen, Package, Wrench, FileText, CheckCircle, Loader2, Terminal } from 'lucide-react';

// TODO: Fix for missing raw log file error in dev. If missing, use empty string fallback.
let rawLogData: string = '';
try {
  // @ts-ignore
  rawLogData = require('../logs.txt?raw');
} catch {
  rawLogData = '';
}

interface PlannerDemoProps {
  repositoryUrl: string;
  runId: number;
}

export function PlannerDemo({ repositoryUrl, runId }: PlannerDemoProps) {
  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement | null>(null);
  const [stickToBottom, setStickToBottom] = useState(true);

  const parsedSteps = useMemo(() => {
    const rawLines = rawLogData.split('\n').map((line) => line.trimEnd());

    const titles: Record<number, string> = {
      1: 'Repository & Docs Discovery',
      2: 'Build Config Analysis',
      3: 'Install/Run Command Extraction',
      4: 'Modern Base Image Selection',
      5: 'Dockerfile & Ignore Generation'
    };

    const descriptions: Record<number, string> = {
      1: 'Scanning repository, docs, and structure',
      2: 'Collecting build scripts, deps, and env',
      3: 'Surfacing install/build/run commands',
      4: 'Choosing a maintained Docker base image',
      5: 'Emitting Dockerfile and .dockerignore'
    };

    // Find markers like "Analysis Step 1/5"
    const markers: { idx: number; step: number }[] = [];
    rawLines.forEach((line, idx) => {
      const match = line.match(/Analysis Step (\d+)\/\d+/);
      if (match) {
        markers.push({ idx, step: Number(match[1]) });
      }
    });

    if (markers.length === 0) {
      return [
        {
          number: 1,
          title: 'Planner Replay',
          description: 'Replaying captured planner logs',
          icon: FolderOpen,
          lines: rawLines.filter((line) => line.trim() !== '')
        }
      ];
    }

    const stepsFromLogs = markers.map((marker, i) => {
      const start = i === 0 ? 0 : marker.idx;
      const end = markers[i + 1]?.idx ?? rawLines.length;
      const chunk = rawLines.slice(start, end).filter((line) => line.trim() !== '');

      return {
        number: marker.step,
        title: titles[marker.step] ?? `Analysis Step ${marker.step}`,
        description: descriptions[marker.step] ?? 'Processing captured analysis logs',
        icon:
          marker.step === 1
            ? FolderOpen
            : marker.step === 2
            ? Package
            : marker.step === 3
            ? Wrench
            : marker.step === 4
            ? FileText
            : FileText,
        lines: chunk
      };
    });

    return stepsFromLogs;
  }, []);

  useEffect(() => {
    // Reset and start when the repository changes (Analyze clicked)
    setLogs([]);
    setCompletedSteps([]);
    setActiveStep(-1);

    const startDelay = setTimeout(() => {
      setActiveStep(0);
    }, 500);

    return () => clearTimeout(startDelay);
  }, [repositoryUrl, runId]);

  useEffect(() => {
    if (activeStep < 0 || activeStep >= parsedSteps.length) return;

    const currentStep = parsedSteps[activeStep];
    let logIndex = 0;

    const perLineMs = 420; // controls how quickly each log line appears
    const stepDuration = Math.max(currentStep.lines.length * perLineMs + 800, 2000);

    const logInterval = setInterval(() => {
      if (logIndex < currentStep.lines.length) {
        setLogs((prev) => [...prev, currentStep.lines[logIndex]]);
        logIndex++;
      }
    }, perLineMs);

    const stepTimer = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, activeStep]);
      if (activeStep < parsedSteps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    }, stepDuration);

    return () => {
      clearInterval(logInterval);
      clearTimeout(stepTimer);
    };
  }, [activeStep, parsedSteps]);

  useEffect(() => {
    const el = logContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el) return;
      const threshold = 12; // px tolerance near bottom
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
      setStickToBottom(isAtBottom);
    };

    el.addEventListener('scroll', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!stickToBottom) return;
    const el = logContainerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [logs, stickToBottom]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Progress Steps */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-700/50">
          <div className="flex items-center justify-between gap-3 mb-8 flex-nowrap">
            <h3 className="text-2xl text-white whitespace-nowrap">Planner Agent Progress</h3>
            <div className="text-2xl text-white text-right ml-4 flex-1 truncate">
              {repositoryUrl ? `Analyzing: ${repositoryUrl}` : 'Awaiting repository input'}
            </div>
          </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {parsedSteps.map((step, index) => (
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
                {index < parsedSteps.length - 1 && (
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
        {activeStep >= 0 && activeStep < parsedSteps.length && (
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                {React.createElement(parsedSteps[activeStep].icon, {
                  className: 'w-8 h-8 text-purple-400'
                })}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl text-white mb-2">{parsedSteps[activeStep].title}</h4>
                <p className="text-slate-300">{parsedSteps[activeStep].description}</p>
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
          <div
            ref={logContainerRef}
            className="bg-slate-950 rounded-xl p-4 border border-slate-700/30 font-mono text-sm overflow-y-auto"
            style={{ height: '640px' }}
          >
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
      {completedSteps.length === parsedSteps.length && parsedSteps.length > 0 && (
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
