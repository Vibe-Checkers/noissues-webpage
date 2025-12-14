import React from 'react';
import { ArrowLeft, Linkedin, Github, Mail, FileText, Lightbulb, ClipboardList, BarChart3, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Berke Kuzey Ardıç',
      role: 'Team Member',
      email: 'kuzey.ardic@ug.bilkent.edu.tr',
      image: 'src/images/kuzey.jpg',
      linkedin: 'https://www.linkedin.com/in/berkekuzeyardic/',
      github: 'https://github.com/kuzeyardic'
    },
    {
      name: 'Elif Ece Can',
      role: 'Team Member',
      email: 'ececan@ug.bilkent.edu.tr',
      image: 'src/images/ece.jpg',
      linkedin: 'https://www.linkedin.com/in/elif-ece-can/',
      github: 'https://github.com/eececan'
    },
    {
      name: 'Emir Tomrukçu',
      role: 'Team Member',
      email: 'emir.tomrukcu@ug.bilkent.edu.tr',
      image: 'src/images/emirtom.jpg',
      linkedin: 'https://www.linkedin.com/in/emirtomrukcu/',
      github: 'https://github.com/emirtom'
    },
    {
      name: 'Mehmet Akif Şahin',
      role: 'Team Member',
      email: 'akif.sahin@ug.bilkent.edu.tr',
      image: 'src/images/akif.jpg',
      linkedin: 'https://www.linkedin.com/in/akif123/',
      github: 'https://github.com/afikbae'
    }
  ];

  const reports = [
    {
      icon: FileText,
      title: 'Project Information Form',
      date: 'October 24, 2025',
      link: 'https://drive.google.com/file/d/1JEffJPfilpJdfUFPqMXowUs5HiHeipAG/view?usp=drive_link',
      available: true
    },
    {
      icon: Lightbulb,
      title: 'Assessment of Innovation Form',
      date: 'October 24, 2025',
      link: 'https://drive.google.com/file/d/18fRw_uAU8kzx81CjmueXdBAnw-LpT8fr/view?usp=sharing',
      available: true
    },
    {
      icon: ClipboardList,
      title: 'Project Specification Document',
      date: 'November 27, 2025',
      link: 'https://drive.google.com/file/d/1CPXcsdn0H4Xf4Pftmkd0rAOSGjS-6lE4/view?usp=sharing',
      available: true
    },
    {
      icon: BarChart3,
      title: 'Analysis and Requirements Report',
      date: 'December 19, 2025',
      link: '#',
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-sm bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-xl text-white">About NoIssues</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl mb-6 tracking-tight text-white">
              NoIssues
            </h1>
            <p className="text-2xl text-blue-400 mb-4">
              An LLM Agent for Automated Issue Verification
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Streamlining software development by automating issue verification and triage
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-8 text-white text-center">About the Project</h2>
          <div className="space-y-6 text-slate-300 text-lg">
            <p>
              Manual issue verification and triage in software projects are time-consuming processes
              in software engineering that consume valuable developer time. Current processes are
              slowed down by missing information in issue tickets, vague descriptions, as well as
              duplicate reports, which interrupt important work of developers just to have them to go
              through many low-quality issues.
            </p>
            <p>
              We propose NoIssues, an LLM agent that automatically
              builds open-source repositories from GitHub and then automates issue verification workflow
              to solve this inefficiency and recover developers' lost time during triage. Inspired by
              the popularity of LLM agents in modern developer tools, we leverage the build reasoning
              and context-understanding qualities of LLMs to build projects that have different build tools
              and domains.
            </p>
            <p>
              Once the software projects are built successfully, NoIssues validates issue
              completeness and identifies duplicates, and verifies the overall quality of issues. By
              ensuring that developers only get pre-validated issues, our product will reduce issue
              triage effort and duration and allow developers to focus on their main work.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">Meet Our Team</h2>
            <p className="text-slate-400 text-lg">The minds behind NoIssues</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <div className="relative aspect-square bg-slate-800 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay with social links */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-white mb-2">{member.name}</h3>
                  <p className="text-slate-400 text-sm mb-3">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-white text-center">Project Reports</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <report.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{report.title}</h3>
                    <p className="text-slate-400 text-sm">{report.date}</p>
                  </div>
                </div>
                {report.available ? (
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    View Report
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-500 rounded-lg cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-white text-center">GitHub Repositories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Github className="w-10 h-10 text-slate-400" />
                <h3 className="text-2xl text-white">Team Organization</h3>
              </div>
              <p className="text-slate-400 mb-6">GitHub organization of the team</p>
              <a
                href="https://github.com/Vibe-Checkers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Github className="w-10 h-10 text-slate-400" />
                <h3 className="text-2xl text-white">Documentation Repository</h3>
              </div>
              <p className="text-slate-400 mb-6">Project documentation and resources</p>
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-500 rounded-lg cursor-not-allowed"
              >
                <Github className="w-5 h-5" />
                Not Available Currently
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-2">© 2025 NoIssues Team. All rights reserved.</p>
          <p className="text-slate-500">Bilkent University - CS Senior Design Project</p>
        </div>
      </footer>
    </div>
  );
}
