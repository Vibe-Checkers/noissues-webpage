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
import DataExplorer from './components/DataExplorer/DataExplorer';

export default function App() {
	const [currentPage, setCurrentPage] = useState<'home' | 'demo' | 'about' | 'explorer'>('home');

	if (currentPage === 'demo') {
		return <DemoPage onBack={() => setCurrentPage('home')} />;
	}

	if (currentPage === 'about') {
		return <AboutPage onBack={() => setCurrentPage('home')} />;
	}

	if (currentPage === 'explorer') {
		return <DataExplorer onBack={() => setCurrentPage('home')} />;
	}

	return (
		<div className="min-h-screen bg-slate-950">
			<Hero
				onTryOut={() => setCurrentPage('demo')}
				onOpenExplorer={() => setCurrentPage('explorer')}
			/>
			<Overview />
			<Architecture />
			<PlannerAgent />
			<VerifierAgent />
			<FunctionalRequirements />
			<Footer onAbout={() => setCurrentPage('about')} />
		</div>
	);
}