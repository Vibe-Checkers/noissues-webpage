import React from 'react';
import { Search, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';

interface WorkflowOverviewProps {
  activeAgent: 'planner' | 'builder' | 'verifier';
  setActiveAgent: (agent: 'planner' | 'builder' | 'verifier') => void;
}

export function WorkflowOverview({ activeAgent, setActiveAgent }: WorkflowOverviewProps) {
  const agents = [
    {
      id: 'planner' as const,
      name: 'Planner Agent',
      icon: Search,
      description: 'Investigation & Strategy',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
    },
    {
      id: 'builder' as const,
      name: 'Builder Agent',
      icon: Hammer,
      description: 'Execution & Build Automation',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
    },
    {
      id: 'verifier' as const,
      name: 'Issue Verifier',
      icon: ShieldCheck,
      description: 'Verification & Documentation',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl tracking-tight text-slate-900 mb-4">
          Three-Agent Pipeline
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Our system uses specialized LLM agents working in sequence to analyze, build, 
          and verify software projects automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          const isActive = activeAgent === agent.id;
          
          return (
            <React.Fragment key={agent.id}>
              <button
                onClick={() => setActiveAgent(agent.id)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isActive
                    ? `${agent.bgColor} ${agent.borderColor} shadow-xl scale-105`
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${agent.color} mb-4`}>
                  <Icon className="size-8 text-white" />
                </div>
                
                <h3 className={`text-2xl mb-2 ${isActive ? agent.textColor : 'text-slate-900'}`}>
                  {agent.name}
                </h3>
                
                <p className="text-slate-600">
                  {agent.description}
                </p>

                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50" />
                )}
              </button>

              {index < agents.length - 1 && (
                <div className="hidden lg:flex justify-center -mx-4">
                  <ArrowRight className="size-8 text-slate-300" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
