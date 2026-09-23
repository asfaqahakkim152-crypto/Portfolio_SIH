import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { RESEARCH_REFERENCES } from '../data/projectData';

export const ResearchReferences: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic &amp; Empirical Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            RESEARCH &amp; REFERENCES
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            USRPS is grounded in published peer-reviewed aerospace and high-voltage research addressing subzero electrochemistry, low-pressure Paschen dielectric breakdown, and high-altitude thermal dissipation.
          </p>
        </div>

        {/* 4 Research Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_REFERENCES.map((ref, idx) => (
            <div 
              key={ref.id}
              className="p-6 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                    REFERENCE 0{idx + 1}
                  </span>
                  {ref.year && (
                    <span className="text-slate-400">PUBLISHED: {ref.year}</span>
                  )}
                </div>

                <h3 className="text-base font-mono font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                  {ref.title}
                </h3>

                <div className="text-xs font-mono text-cyan-400 mb-3 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>{ref.source}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong className="text-slate-400 font-mono block text-[10px] uppercase mb-0.5">Key Empirical Takeaway:</strong>
                  {ref.keyTakeaway}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Cited in SIH26049 Dossier</span>
                </span>

                <a
                  href={ref.url}
                  target={ref.url.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-slate-200 bg-navy-950 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-400 text-cyan-300 transition-all"
                >
                  <span>{ref.url.startsWith('#') ? 'View Prototype' : 'View Source'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
