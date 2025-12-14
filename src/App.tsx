import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Architecture } from './components/Architecture';
import { PlannerAgent } from './components/PlannerAgent';
import { VerifierAgent } from './components/VerifierAgent';
import { FunctionalRequirements } from './components/FunctionalRequirements';
import { Footer } from './components/Footer';
import { DemoPage } from './components/DemoPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'demo' | 'about'>('home');

  if (currentPage === 'demo') {
    return <DemoPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onTryOut={() => setCurrentPage('demo')} />
      <Overview />
      <Architecture />
      <PlannerAgent />
      <VerifierAgent />
      <FunctionalRequirements />
      <Footer onAbout={() => setCurrentPage('about')} />
    </div>
  );
}