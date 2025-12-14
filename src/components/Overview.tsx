import React from 'react';
import { Target, Sparkles } from 'lucide-react';

export function Overview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">System Overview</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A two-stage agent architecture for automatic issue reproduction in containerized environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-white">The Challenge</h3>
              </div>
            </div>
            <p className="text-slate-300">
              Reproducing software issues across different environments is time-consuming and error-prone. 
              Traditional approaches require manual configuration of dependencies, runtimes, and build tools, 
              making issue verification a bottleneck in development workflows.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-white">Our Approach</h3>
              </div>
            </div>
            <p className="text-slate-300">
              An intelligent two-stage system that automatically analyzes repositories, infers environment 
              requirements, generates Dockerfiles, and executes reproduction steps in isolated containers—delivering 
              portable, auditable reproduction packages.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-500/20">
          <h3 className="text-2xl mb-4 text-white">Key Advantages</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-blue-400 mb-2">✓ Portable Reproduction</div>
              <p className="text-slate-400 text-sm">
                Self-contained Dockerfiles ensure consistent reproduction across any environment
              </p>
            </div>
            <div>
              <div className="text-blue-400 mb-2">✓ Minimal Human Effort</div>
              <p className="text-slate-400 text-sm">
                Automatic inference of dependencies, tools, and build steps
              </p>
            </div>
            <div>
              <div className="text-blue-400 mb-2">✓ Auditable Results</div>
              <p className="text-slate-400 text-sm">
                Structured logs and artifacts provide clear reproduction evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
