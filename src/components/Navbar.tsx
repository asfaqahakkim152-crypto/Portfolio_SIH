import React, { useState, useEffect } from 'react';
import { Shield, Activity, Radio, ExternalLink, Play, Menu, X, Cpu, ChevronRight } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

interface NavbarProps {
  onOpenVideo: () => void;
  dashboardUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVideo, dashboardUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Challenge", href: "#challenge" },
    { label: "Solution", href: "#solution" },
    { label: "Architecture", href: "#architecture" },
    { label: "Hardware", href: "#hardware" },
    { label: "Adaptive Logic", href: "#adaptive-protection" },
    { label: "Live Telemetry", href: "#monitoring" },
    { label: "Prototype", href: "#prototype" },
    { label: "Applications", href: "#applications" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Project Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
              <Shield className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-sm text-white transition-colors">
                  {PROJECT_METADATA.teamName}
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                  {PROJECT_METADATA.problemStatementId}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                USRPS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Watch Demo</span>
            </button>

            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-navy-950 bg-white hover:bg-slate-200 transition-all shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-navy-950" />
              <span>Live Dashboard</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenVideo}
              className="p-1.5 rounded bg-navy-800 border border-slate-700 text-slate-200 md:hidden"
              aria-label="Watch Demo"
            >
              <Play className="w-4 h-4 text-red-400 fill-red-400/20" />
            </button>
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-cyan-400 text-navy-950 font-bold md:hidden text-xs"
              aria-label="Live Dashboard"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-800 bg-navy-950/95 backdrop-blur-xl rounded-lg p-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  SYSTEM STATUS: OPERATIONAL
                </span>
                <span>SIH26049</span>
              </div>
              
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded text-sm font-mono text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVideo();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-mono text-slate-200 bg-navy-800 border border-slate-700"
                >
                  <Play className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
                  <span>Watch Project Video Demo</span>
                </button>
                <a
                  href={dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-mono font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300"
                >
                  <Activity className="w-3.5 h-3.5 text-navy-950" />
                  <span>Launch Live Field Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5 text-navy-950" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
