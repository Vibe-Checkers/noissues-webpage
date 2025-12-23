import React from 'react';
import { Container } from 'lucide-react';

interface FooterProps {
  onAbout?: () => void;
}

export function Footer({ onAbout }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <Container className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl text-white">NoIssues Planner & Verifier</h3>
              <p className="text-slate-400 text-sm">Automated containerized issue reproduction</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Two-stage architecture for portable, auditable bug reproduction
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Automatic inference • Isolated execution • Clear verdicts
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            Separating planning from execution ensures generality across heterogeneous repositories
          </p>
          {onAbout && (
            <button
              onClick={onAbout}
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              About the Team →
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}