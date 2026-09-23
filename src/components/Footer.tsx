import React from 'react';
import { Shield, Activity, Play, ExternalLink, Linkedin, ArrowUp, Cpu, Heart } from 'lucide-react';
import { PROJECT_METADATA, TEAM_MEMBERS } from '../data/projectData';

interface FooterProps {
  onOpenVideo: () => void;
  dashboardUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVideo, dashboardUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-navy-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity & Closing Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded border border-cyan-400/40 bg-navy-900 flex items-center justify-center text-cyan-300">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white tracking-wider">
                  {PROJECT_METADATA.teamName}
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">
                  {PROJECT_METADATA.projectName}
                </span>
              </div>
            </div>

            <p className="text-sm font-display italic text-ice-200 mb-4 max-w-sm leading-relaxed">
              “Engineering reliability for the world's harshest environments.”
            </p>

            <div className="space-y-1.5 text-xs font-mono text-slate-400">
              <div>Smart India Hackathon 2026 (SIH 2026)</div>
              <div>Problem Statement ID: <strong className="text-white">{PROJECT_METADATA.problemStatementId}</strong></div>
              <div>Category: <strong className="text-cyan-300">Hardware</strong> • Theme: <strong className="text-slate-300">Smart Automation</strong></div>
            </div>
          </div>

          {/* Col 2: Direct Project Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              PROJECT ACTION ENDPOINTS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Live Telemetry Dashboard</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenVideo}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-red-300 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
                  <span>Watch Project Demo Video</span>
                </button>
              </li>
              <li>
                <a
                  href="#challenge"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ladakh HAA/SHAA Challenge
                </a>
              </li>
              <li>
                <a
                  href="#hardware"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Engineered Hardware BOM
                </a>
              </li>
              <li>
                <a
                  href="#prototype"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Physical Prototype Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Team HYROX LinkedIn Profiles (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>TEAM HYROX LINKEDIN PROFILES</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TEAM_MEMBERS.map((m) => (
                <a
                  key={m.id}
                  href={m.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-navy-900/80 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition-all text-xs font-mono flex items-center justify-between group"
                >
                  <div className="truncate">
                    <div className="font-bold text-white group-hover:text-cyan-200 truncate">{m.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{m.role}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0 ml-1.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Team HYROX. Built for Smart India Hackathon (SIH26049). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Hardware Proof-of-Concept Prototype
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 transition-colors flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
