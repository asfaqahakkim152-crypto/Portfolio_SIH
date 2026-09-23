import React, { useState } from 'react';
import { X, Link2, Check, ExternalLink, RefreshCw } from 'lucide-react';
import { PROJECT_METADATA, TEAM_MEMBERS } from '../data/projectData';

interface UrlSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  dashboardUrl: string;
  onUpdateDashboardUrl: (url: string) => void;
  demoUrl: string;
  onUpdateDemoUrl: (url: string) => void;
  linkedinUrls: Record<string, string>;
  onUpdateLinkedinUrl: (memberId: string, url: string) => void;
}

export const UrlSettingsModal: React.FC<UrlSettingsModalProps> = ({
  isOpen,
  onClose,
  dashboardUrl,
  onUpdateDashboardUrl,
  demoUrl,
  onUpdateDemoUrl,
  linkedinUrls,
  onUpdateLinkedinUrl,
}) => {
  const [localDash, setLocalDash] = useState(dashboardUrl);
  const [localDemo, setLocalDemo] = useState(demoUrl);
  const [localLinkedins, setLocalLinkedins] = useState<Record<string, string>>(linkedinUrls);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdateDashboardUrl(localDash.trim());
    onUpdateDemoUrl(localDemo.trim());
    Object.entries(localLinkedins).forEach(([id, url]) => {
      onUpdateLinkedinUrl(id, url.trim());
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleResetDefaults = () => {
    setLocalDash(PROJECT_METADATA.defaultDashboardUrl);
    setLocalDemo(PROJECT_METADATA.defaultDemoUrl);
    const defaults: Record<string, string> = {};
    TEAM_MEMBERS.forEach(m => {
      defaults[m.id] = m.linkedinUrl;
    });
    setLocalLinkedins(defaults);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-navy-900 border border-cyan-500/40 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10 tech-panel max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <Link2 className="w-4 h-4 text-cyan-400" />
            <span className="font-bold uppercase tracking-wider">PROJECT URLS &amp; TELEMETRY ENDPOINTS</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Fields */}
        <div className="p-6 space-y-5 overflow-y-auto font-mono text-xs">
          
          {/* Live Dashboard URL */}
          <div>
            <label className="text-white block font-bold mb-1 flex items-center justify-between">
              <span>[1] LIVE DASHBOARD URL:</span>
              <span className="text-[10px] text-cyan-400">Opens in [LIVE DASHBOARD] buttons</span>
            </label>
            <input 
              type="url"
              value={localDash}
              onChange={(e) => setLocalDash(e.target.value)}
              className="w-full px-3 py-2 rounded bg-navy-950 border border-slate-700 text-slate-200 focus:border-cyan-400 focus:outline-none"
              placeholder="https://..."
            />
          </div>

          {/* YouTube Video URL */}
          <div>
            <label className="text-white block font-bold mb-1 flex items-center justify-between">
              <span>[2] YOUTUBE PROJECT DEMO URL:</span>
              <span className="text-[10px] text-red-400">Embeds in [WATCH DEMO] modal</span>
            </label>
            <input 
              type="url"
              value={localDemo}
              onChange={(e) => setLocalDemo(e.target.value)}
              className="w-full px-3 py-2 rounded bg-navy-950 border border-slate-700 text-slate-200 focus:border-cyan-400 focus:outline-none"
              placeholder="https://youtu.be/..."
            />
          </div>

          {/* Team Member & Mentor LinkedIn URLs */}
          <div className="pt-2 border-t border-slate-800">
            <label className="text-white block font-bold mb-3">
              [3] TEAM HYROX &amp; MENTOR LINKEDIN PROFILES ({TEAM_MEMBERS.length} PROFILES):
            </label>

            <div className="space-y-3">
              {TEAM_MEMBERS.map((m) => (
                <div key={m.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <div className="sm:col-span-5 text-slate-300 truncate">
                    <span className="text-white font-bold">{m.name}</span>
                    <span className="text-[10px] text-slate-500 block">{m.role}</span>
                  </div>
                  <div className="sm:col-span-7">
                    <input 
                      type="url"
                      value={localLinkedins[m.id] ?? m.linkedinUrl}
                      onChange={(e) => setLocalLinkedins({ ...localLinkedins, [m.id]: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-navy-950 border border-slate-700 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-navy-950/90 flex items-center justify-between shrink-0">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy-900 border border-slate-700 text-slate-400 hover:text-white text-xs font-mono"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Restore Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-navy-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-1.5 rounded bg-cyan-400 hover:bg-cyan-300 text-navy-950 font-bold text-xs font-mono transition-colors"
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : null}
              <span>{savedSuccess ? 'Saved!' : 'Apply URLs'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
