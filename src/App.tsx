import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { SystemDataFlow } from './components/SystemDataFlow';
import { HardwareSection } from './components/HardwareSection';
import { HardwareArchitecture } from './components/HardwareArchitecture';
import { AdaptiveProtectionSim } from './components/AdaptiveProtectionSim';
import { LiveMonitoringDashboard } from './components/LiveMonitoringDashboard';
import { PrototypeSection } from './components/PrototypeSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { TeamSection } from './components/TeamSection';
import { ResearchReferences } from './components/ResearchReferences';
import { ImpactSection } from './components/ImpactSection';
import { ProjectTimeline } from './components/ProjectTimeline';
import { Footer } from './components/Footer';
import { VideoDemoModal } from './components/VideoDemoModal';
import { UrlSettingsModal } from './components/UrlSettingsModal';
import { PROJECT_METADATA } from './data/projectData';
import { Link2, Shield, Radio, Activity, ArrowUp } from 'lucide-react';

export function App() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [urlSettingsOpen, setUrlSettingsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Persistent URLs with initial fallbacks
  const [dashboardUrl, setDashboardUrl] = useState<string>(() => {
    const saved = localStorage.getItem('hyrox_dashboard_url');
    if (!saved || saved.includes('cloudworkstations.dev') || saved.includes('firebase-studio')) {
      return PROJECT_METADATA.defaultDashboardUrl;
    }
    return saved;
  });

  const [demoUrl, setDemoUrl] = useState<string>(() => {
    const saved = localStorage.getItem('hyrox_demo_url');
    if (!saved || saved.includes('LYt1nEL-btk')) {
      return PROJECT_METADATA.defaultDemoUrl;
    }
    return saved;
  });

  const [linkedinUrls, setLinkedinUrls] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('hyrox_linkedin_urls');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleUpdateDashboardUrl = (url: string) => {
    setDashboardUrl(url);
    localStorage.setItem('hyrox_dashboard_url', url);
  };

  const handleUpdateDemoUrl = (url: string) => {
    setDemoUrl(url);
    localStorage.setItem('hyrox_demo_url', url);
  };

  const handleUpdateLinkedinUrl = (memberId: string, url: string) => {
    const updated = { ...linkedinUrls, [memberId]: url };
    setLinkedinUrls(updated);
    try {
      localStorage.setItem('hyrox_linkedin_urls', JSON.stringify(updated));
    } catch {}
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* HUD Navigation Bar */}
      <Navbar 
        onOpenVideo={() => setVideoOpen(true)} 
        dashboardUrl={dashboardUrl} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenVideo={() => setVideoOpen(true)} 
          dashboardUrl={dashboardUrl} 
        />
        
        <ProblemSection />
        
        <SolutionSection />
        
        <SystemDataFlow />
        
        <HardwareArchitecture />
        
        <HardwareSection />
        
        <AdaptiveProtectionSim />
        
        <LiveMonitoringDashboard 
          dashboardUrl={dashboardUrl} 
        />
        
        <PrototypeSection 
          onOpenVideo={() => setVideoOpen(true)} 
          dashboardUrl={dashboardUrl} 
        />
        
        <ApplicationsSection />
        
        <DifferentiatorsSection />
        
        <TeamSection 
          memberLinkedinUrls={linkedinUrls} 
        />
        
        <ResearchReferences />
        
        <ImpactSection />
        
        <ProjectTimeline />
      </main>

      {/* Footer */}
      <Footer 
        onOpenVideo={() => setVideoOpen(true)} 
        dashboardUrl={dashboardUrl} 
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-white text-navy-950 hover:bg-slate-200 shadow-lg shadow-black/20 transition-all group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
        <button
          onClick={() => setUrlSettingsOpen(true)}
          className="p-3 rounded-full bg-navy-900 border border-white/10 text-slate-400 hover:text-white hover:bg-navy-800 shadow-lg shadow-black/20 transition-all group"
          title="Configure Dashboard & URLs"
          aria-label="Configure Project URLs"
        >
          <Link2 className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </button>
      </div>

      {/* Video Modal Player */}
      <VideoDemoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={demoUrl}
      />

      {/* Configurable URLs Modal */}
      <UrlSettingsModal
        isOpen={urlSettingsOpen}
        onClose={() => setUrlSettingsOpen(false)}
        dashboardUrl={dashboardUrl}
        onUpdateDashboardUrl={handleUpdateDashboardUrl}
        demoUrl={demoUrl}
        onUpdateDemoUrl={handleUpdateDemoUrl}
        linkedinUrls={linkedinUrls}
        onUpdateLinkedinUrl={handleUpdateLinkedinUrl}
      />

    </div>
  );
}
export default App;
