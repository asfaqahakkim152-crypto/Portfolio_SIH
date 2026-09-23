import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  BatteryMedium, 
  Wrench, 
  Plane, 
  Radio, 
  Mountain,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      id: "safety",
      title: "SAFETY",
      subtitle: "Mitigating Life-Critical Electronic Failure in Extreme Terrain",
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
      desc: "Reduces unexpected power cuts and control system freeze in alpine environments. By maintaining safe operating parameters for tactical communication sets and search-and-rescue UAVs, personnel safety is significantly elevated.",
      badge: "MISSION CRITICAL"
    },
    {
      id: "reliability",
      title: "RELIABILITY",
      subtitle: "Extending Continuous Operational Durability Under SHAA Stress",
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      desc: "Eliminates premature failure modes including solder joint thermal fatigue, PCB dielectric flashover, and subzero battery voltage collapse, ensuring systems operate reliably for extended unattended missions.",
      badge: "HARDENED ASSURANCE"
    },
    {
      id: "energy",
      title: "ENERGY EFFICIENCY",
      subtitle: "Condition-Based Proportional Thermal & Power Management",
      icon: <BatteryMedium className="w-5 h-5 text-emerald-400" />,
      desc: "Replaces power-wasting passive heaters with closed-loop PID control. Heating power is applied only when temperatures cross freeze boundaries, conserving battery reserves for maximum payload uptime.",
      badge: "SMART PID REGULATION"
    },
    {
      id: "maintainability",
      title: "MAINTAINABILITY",
      subtitle: "Audited Black-Box Fault History & Proactive Field Health Alerts",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      desc: "Continuous offline SPI logging stores an immutable record of environmental stress cycles, overcurrent events, and UV dosage hours, enabling condition-based preventive servicing before failures occur in the field.",
      badge: "PREVENTIVE TELEMETRY"
    }
  ];

  return (
    <section className="py-24 relative border-t border-slate-800 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Operational &amp; Strategic Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            ENGINEERING IMPACT
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            By shifting from ad-hoc passive enclosures to proactive, deterministic protection, USRPS transforms how electrical and electronic systems survive in high-altitude defense and scientific deployments.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {impacts.map((imp) => (
            <div 
              key={imp.id}
              className="p-6 sm:p-8 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="p-2 rounded bg-navy-950 border border-slate-800 text-cyan-400">
                    {imp.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                    {imp.badge}
                  </span>
                </div>

                <h3 className="text-xl font-mono font-bold text-white mb-1 uppercase group-hover:text-cyan-200 transition-colors">
                  {imp.title}
                </h3>

                <h4 className="text-xs font-mono font-semibold text-ice-300 mb-3">
                  {imp.subtitle}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {imp.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Field-Relevant Proof-of-Concept Target</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Cross-Sector Value Banner */}
        <div className="p-6 sm:p-8 rounded-xl tech-panel border-cyan-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Plane className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase mb-1">Defense &amp; Tactical UAVs</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Prevents sudden flight brownouts and preserves battery energy during surveillance patrols across border passes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Radio className="w-5 h-5 text-ice-300 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase mb-1">Forward Communications</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Ensures unattended mountain relays and VHF/UHF tactical transceivers maintain continuous transmission uptime.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mountain className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase mb-1">Himalayan Infrastructure</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Offers standardized, modular protection for scientific observatories, weather instrumentation, and border outposts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
