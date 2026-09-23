import React from 'react';
import { 
  Shield, 
  Activity, 
  Play, 
  ArrowDown, 
  ThermometerSnowflake, 
  Gauge, 
  Mountain, 
  Radiation, 
  ExternalLink,
  ChevronDown,
  Cpu,
  Layers,
  Radio
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

interface HeroProps {
  onOpenVideo: () => void;
  dashboardUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, dashboardUrl }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-navy-950">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-navy-950 pointer-events-none"></div>
      
      {/* Background stylized Mountain Silhouette Vector */}
      <div className="absolute bottom-0 inset-x-0 h-96 pointer-events-none opacity-20 overflow-hidden">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-ice-500 fill-current">
          <path d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 animate-fadeIn">
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
            SIH 2026
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
            PS ID: {PROJECT_METADATA.problemStatementId}
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-semibold text-white">
            TEAM {PROJECT_METADATA.teamName}
          </div>
          <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-400">
            {PROJECT_METADATA.theme} • {PROJECT_METADATA.psCategory}
          </div>
        </div>

        {/* Two-Column Grid: Left Headline & Narrative, Right Central Hardware Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Subtitle & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[12px] font-medium text-slate-300">
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span>Defense &amp; Aerospace Engineering</span>
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Universal Smart <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Reliability &amp; Protection
              </span> <br />
              System
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Engineering reliable protection for electronic systems operating in the extreme high-altitude environment of Ladakh.
            </p>

            {/* Environmental Indicators Strip */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              <div className="p-2.5 rounded bg-navy-900/70 border border-slate-800 hover:border-ice-400/30 transition-colors">
                <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Sub-Zero Temp</span>
                </div>
                <div className="text-xs font-mono font-bold text-white">-40°C Ambient</div>
              </div>

              <div className="p-2.5 rounded bg-navy-900/70 border border-slate-800 hover:border-ice-400/30 transition-colors">
                <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                  <Gauge className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Low Air Pressure</span>
                </div>
                <div className="text-xs font-mono font-bold text-white">&lt; 50 kPa (Thin Air)</div>
              </div>

              <div className="p-2.5 rounded bg-navy-900/70 border border-slate-800 hover:border-ice-400/30 transition-colors">
                <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                  <Mountain className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">High Altitude</span>
                </div>
                <div className="text-xs font-mono font-bold text-white">3,000m – 6,000m+</div>
              </div>

              <div className="p-2.5 rounded bg-navy-900/70 border border-slate-800 hover:border-ice-400/30 transition-colors">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Radiation className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Radiation</span>
                </div>
                <div className="text-xs font-mono font-bold text-white">High Solar UV / Cosmic</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              
              <a
                href={dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-navy-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Activity className="w-4 h-4" />
                <span>Live Dashboard</span>
              </a>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </button>

              <a
                href="#solution"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                <span>Learn More</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Architecture Core Summary Tag */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Primary Core: STM32 Black Pill Cortex-M4</span>
              <span className="text-slate-600">|</span>
              <Radio className="w-3.5 h-3.5 text-ice-300" />
              <span>RF Link: LoRa SX1278 (433MHz)</span>
            </div>

          </div>

          {/* Right Column: Clean Hardware Visual */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-4 backdrop-blur-sm overflow-hidden group">
              
              <div className="relative pt-2 pb-2 flex flex-col items-center justify-center">
                
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-navy-900 flex items-center justify-center">
                  
                  <img 
                    src="/assets/usrps-module.png" 
                    alt="Universal Smart Reliability & Protection System Hardware Core" 
                    className="object-contain max-h-full max-w-[85%] z-10 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Clean gradients instead of glowing cyan */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-white/5 pointer-events-none"></div>

                </div>

                <div className="w-full mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-400 px-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-300" />
                    <span>Hardware Prototype Module</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-center pt-8">
        <a 
          href="#challenge" 
          className="inline-flex flex-col items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors group"
          aria-label="Scroll to challenge section"
        >
          <span className="tracking-widest uppercase text-[9px] text-slate-400 group-hover:text-ice-300">SCROLL TO INSPECT</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
        </a>
      </div>

    </section>
  );
};
