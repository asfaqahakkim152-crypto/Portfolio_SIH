import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ArrowDown, 
  ThermometerSnowflake, 
  Gauge, 
  Wind, 
  Sun, 
  BatteryLow, 
  Flame, 
  ZapOff, 
  Cpu, 
  WifiOff, 
  Clock,
  ChevronRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arcing' | 'drone' | 'comms'>('arcing');

  const challenges = [
    {
      id: "cold",
      icon: <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />,
      title: "Extreme Subzero Cold (-40°C)",
      desc: "Severe freezing temperatures freeze battery electrolytes, spike internal impedance (ESR), and induce thermal contraction on semiconductor silicon."
    },
    {
      id: "pressure",
      icon: <Gauge className="w-4 h-4 text-ice-300" />,
      title: "Low Atmospheric Pressure (<50 kPa)",
      desc: "Thin air drastically reduces air density. Decreased dielectric breakdown strength triggers destructive Paschen's Law electrical arcing across standard PCB traces."
    },
    {
      id: "battery",
      icon: <BatteryLow className="w-4 h-4 text-amber-400" />,
      title: "Battery Capacity Degradation",
      desc: "Cold temperatures cut effective Li-ion capacity by 40% to 65% and drop UAV flight endurance from 60 minutes down to just 20–25 minutes."
    },
    {
      id: "thermal",
      icon: <Flame className="w-4 h-4 text-orange-400" />,
      title: "Thermal Stress & Thermal Cycling",
      desc: "Daily swings between subzero field nights and heated operational states cause severe CTE mismatches, micro-fracturing solder joints and BGA balls."
    },
    {
      id: "insulation",
      icon: <ZapOff className="w-4 h-4 text-red-400" />,
      title: "Electrical Insulation & Arcing Failure",
      desc: "Reduced dielectric air barrier causes corona discharge and flashover arcing at voltages as low as 300V, burning PCB substrates."
    },
    {
      id: "uv",
      icon: <Sun className="w-4 h-4 text-amber-300" />,
      title: "High UV & Cosmic Radiation",
      desc: "Minimal atmospheric filtering at 4500m+ elevates UV flux by over 45%, accelerating photochemical embrittlement of wiring insulation and structural seals."
    },
    {
      id: "comms",
      icon: <WifiOff className="w-4 h-4 text-sky-400" />,
      title: "Communication Instability",
      desc: "Deep Himalayan mountain shadowing, extreme cold temperature oscillator drift, and lack of cellular connectivity cause communication blackouts."
    },
    {
      id: "lifespan",
      icon: <Clock className="w-4 h-4 text-slate-300" />,
      title: "Drastically Reduced Equipment Lifespan",
      desc: "Premature failure of critical defense drones, radar stations, and communication relays forces high-cost emergency field replacements."
    }
  ];

  const failureChain = [
    {
      step: "01",
      title: "EXTREME ENVIRONMENT",
      desc: "Subzero cold (-40°C), low air density (<50 kPa), high UV flux in Ladakh HAA/SHAA."
    },
    {
      step: "02",
      title: "ELECTRONIC STRESS",
      desc: "Electrolyte freezing, dielectric air breakdown, rapid thermal contraction gradients."
    },
    {
      step: "03",
      title: "PERFORMANCE DEGRADATION",
      desc: "Battery capacity drops 60%, voltage sags under motor thrust, trace arcing begins."
    },
    {
      step: "04",
      title: "FAILURE / DOWNTIME",
      desc: "PCB burnout, UAV emergency crash-landing, communication transceivers drop offline."
    },
    {
      step: "05",
      title: "SAFETY RISK",
      desc: "Mission compromise, defense surveillance blindness, lost telemetry in critical border zones."
    }
  ];

  return (
    <section id="challenge" className="py-24 relative border-t border-white/5 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-red-500/20 bg-red-500/10 text-[12px] font-medium text-red-300">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>Problem Statement SIH26049</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            The Challenge
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In the High Altitude Areas (HAA) and Super High Altitude Areas (SHAA) of Ladakh (3,000m to 6,000m+ AMSL), standard off-the-shelf electronics fail catastrophically. The lethal combination of subzero cold and low atmospheric pressure systematically destroys power sources, circuitry, and communication links.
          </p>
        </div>

        {/* 5-Step Visual Failure Progression */}
        <div className="mb-20 p-6 sm:p-8 rounded-xl tech-panel border-slate-800">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>PHYSICAL FAILURE CASCADE MECHANISM</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Unprotected High-Altitude Systems</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {failureChain.map((item, idx) => (
              <div key={item.step} className="relative flex flex-col p-4 rounded bg-navy-950/80 border border-slate-800 hover:border-red-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                    STEP {item.step}
                  </span>
                  {idx < failureChain.length - 1 && (
                    <span className="hidden md:block text-slate-600 font-mono">→</span>
                  )}
                </div>
                <h4 className="text-xs font-mono font-bold text-white mb-1.5 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Layout: Realistic Visuals on Left & Environmental Parameters on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Realistic Ladakh & Failure Mode Visuals */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Tab Selector for Evidence Visuals */}
            <div className="flex rounded bg-navy-950 p-1 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab('arcing')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeTab === 'arcing' 
                    ? 'bg-navy-800 text-cyan-300 font-bold shadow border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Dielectric Arcing Failure
              </button>
              <button
                onClick={() => setActiveTab('drone')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeTab === 'drone' 
                    ? 'bg-navy-800 text-cyan-300 font-bold shadow border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                UAV Snow &amp; Cold Degradation
              </button>
              <button
                onClick={() => setActiveTab('comms')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeTab === 'comms' 
                    ? 'bg-navy-800 text-cyan-300 font-bold shadow border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tactical Comms in Ladakh
              </button>
            </div>

            {/* Visual Display Card */}
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-navy-950 tech-panel shadow-xl">
              {activeTab === 'arcing' && (
                <div>
                  <div className="relative aspect-[16/10] bg-black">
                    <img 
                      src="/assets/pcb-arcing-failure.png" 
                      alt="Actual PCB dielectric breakdown burnout due to Paschen's law arcing at low pressure" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-red-950/90 border border-red-500/40 text-[10px] font-mono text-red-300 font-bold">
                      FAILURE MODE: DIELECTRIC BREAKDOWN
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/90 border-t border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-white mb-1 uppercase">
                      Paschen's Law Dielectric Arcing at &lt; 50 kPa
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      At high altitudes, low air density drops the required voltage threshold for electrical breakdown. High-voltage switching on standard PCB traces causes devastating conductive arc tracks that physically char fiberglass substrates.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'drone' && (
                <div>
                  <div className="relative aspect-[16/10] bg-black">
                    <img 
                      src="/assets/drone-cold-snow.png" 
                      alt="High-altitude drone in freezing Himalayan snow" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-cyan-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold">
                      FAILURE MODE: FLIGHT TIME COLLAPSE
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/90 border-t border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-white mb-1 uppercase">
                      Lithium Battery Freezing &amp; Severe Capacity Loss
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Standard Li-ion cells suffer dramatic ionic mobility decline at -20°C. Unheated packs exhibit immediate 50–65% capacity drops, reducing drone flight endurance from 60 minutes to just 20 minutes under freezing mountain winds.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'comms' && (
                <div>
                  <div className="relative aspect-[16/10] bg-black">
                    <img 
                      src="/assets/defence-soldier-ladakh.png" 
                      alt="Defense personnel operating tactical communications in Ladakh subzero conditions" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-sky-950/90 border border-sky-500/40 text-[10px] font-mono text-sky-300 font-bold">
                      OPERATIONAL ZONE: LADAKH SHAA
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/90 border-t border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-white mb-1 uppercase">
                      Subzero Tactical Comms &amp; Border Surveillance
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Defense and scientific field gear stationed across Khardung La, Chang La, and Siachen border regions operate in unremitting subzero cold. Hardware downtime directly threatens communication lifelines.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Technical Environmental Parameters Grid */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>SPECIFIC HIGH-ALTITUDE STRESSORS IN LADAKH</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {challenges.map((c) => (
                <div 
                  key={c.id} 
                  className="p-3.5 rounded-lg bg-navy-950/70 border border-slate-800 hover:border-ice-400/30 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 rounded bg-navy-900 border border-slate-800">
                      {c.icon}
                    </div>
                    <h4 className="text-xs font-mono font-bold text-white group-hover:text-ice-200 transition-colors">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-lg bg-navy-950 border border-cyan-500/20 text-xs font-mono flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 shrink-0 animate-pulse"></div>
              <div>
                <span className="text-cyan-300 font-bold uppercase">Engineering Conclusion: </span>
                <span className="text-slate-300">
                  Individual off-the-shelf electronic devices cannot survive Ladakh's dual extremes alone without a dedicated, adaptive external protection layer.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
