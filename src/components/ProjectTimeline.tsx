import React from 'react';
import { 
  GitCommit, 
  CheckCircle2, 
  Clock, 
  Activity, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { PROJECT_TIMELINE } from '../data/projectData';

export const ProjectTimeline: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Development Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            PROJECT TIMELINE
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            A rigorous 9-stage engineering development progression from Ladakh subzero failure analysis to physical hardware bench testing and live demonstration.
          </p>
        </div>

        {/* Technical Timeline Layout */}
        <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {PROJECT_TIMELINE.map((stage, idx) => {
            const isDone = stage.status === 'completed';
            const isInProgress = stage.status === 'in-progress';

            return (
              <div key={stage.step} className="relative group">
                
                {/* Custom Technical Node Marker */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded border flex items-center justify-center font-mono text-[10px] font-bold transition-all ${
                  isDone 
                    ? 'bg-navy-950 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20' 
                    : isInProgress
                    ? 'bg-navy-900 border-amber-400 text-amber-300 animate-pulse'
                    : 'bg-navy-950 border-slate-800 text-slate-600'
                }`}>
                  {stage.step}
                </div>

                {/* Timeline Card */}
                <div className="p-5 sm:p-6 rounded-xl tech-panel border-slate-800 group-hover:border-cyan-400/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                        {stage.stage}
                      </span>
                      <h3 className="text-sm sm:text-base font-mono font-bold text-white uppercase group-hover:text-cyan-200 transition-colors">
                        {stage.title}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                      isDone 
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    }`}>
                      {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      {stage.status.replace('-', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {stage.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-400 flex items-start gap-1.5 pt-2 border-t border-slate-800/60">
                    <span className="text-cyan-400">Verification Deliverable:</span>
                    <span>{stage.verificationMetric}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
