import React from 'react';
import { Container, FileCode, CheckCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onTryOut: () => void;
}

export function Hero({ onTryOut }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
              <Container className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight text-white">
            NoIssues: An LLM Agent for Automated Issue Verification
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12">
            Automatically create self-contained container environments that reproduce software issues with minimal human effort
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-700/50">
              <FileCode className="w-5 h-5 text-blue-400" />
              <span className="text-slate-200">Dockerfile Generation</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-700/50">
              <Container className="w-5 h-5 text-blue-400" />
              <span className="text-slate-200">Isolated Execution</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-700/50">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-slate-200">Issue Reproduction</span>
            </div>
          </div>
          <button
            onClick={onTryOut}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Try Out Demo
          </button>
        </div>
      </div>
    </section>
  );
}