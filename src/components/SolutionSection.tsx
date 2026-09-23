import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sliders, 
  Thermometer, 
  Zap, 
  BatteryCharging, 
  FileText, 
  Radio, 
  HardDrive, 
  Activity, 
  Sparkles,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const capabilities = [
    {
      num: "01",
      title: "Thermal Management",
      icon: <Thermometer className="w-4 h-4 text-cyan-400" />,
      desc: "Closed-loop PID-controlled heating pad maintains battery and sensitive logic above freezing (+5°C to +15°C) inside a localized thermal insulation envelope."
    },
    {
      num: "02",
      title: "Arcing / Insulation Protection",
      icon: <Zap className="w-4 h-4 text-ice-300" />,
      desc: "Monitors ambient barometric pressure and limits transient voltage spikes (dV/dt suppression) to eliminate Paschen dielectric air breakdown and PCB flashovers."
    },
    {
      num: "03",
      title: "Battery Protection",
      icon: <BatteryCharging className="w-4 h-4 text-emerald-400" />,
      desc: "Continuously monitors bus voltage sag and internal impedance under subzero discharge; sheds non-essential auxiliary loads before brownout occurs."
    },
    {
      num: "04",
      title: "PCB Protection",
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      desc: "Buffers rapid temperature fluctuations with controlled thermal ramping, preventing differential expansion stress that fractures SMD solder joints."
    },
    {
      num: "05",
      title: "Radiation / Environmental Protection",
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      desc: "Combines conformal sensor seals and dedicated UV photodiode monitoring to track cumulative radiation exposure hours for preventive maintenance."
    },
    {
      num: "06",
      title: "Communication & Power Monitoring",
      icon: <Radio className="w-4 h-4 text-teal-400" />,
      desc: "Real-time tracking of current draw, telemetry packet delivery rate, and RF RSSI signal strength to diagnose communication degradations early."
    },
    {
      num: "07",
      title: "Offline Data Logging",
      icon: <HardDrive className="w-4 h-4 text-purple-400" />,
      desc: "Black-box circular buffer logging to industrial SPI MicroSD flash storage ensures zero telemetry loss during Himalayan valley RF blackouts."
    },
    {
      num: "08",
      title: "Adaptive Equipment Protection",
      icon: <Sliders className="w-4 h-4 text-cyan-300" />,
      desc: "Rule-based embedded threshold engine adjusts protection aggressiveness dynamically based on real-time sensor fusion of cold, pressure, and electrical loads."
    }
  ];

  return (
    <section id="solution" className="py-24 relative border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[12px] font-medium text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Universal Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Our Solution
          </h2>

          <p className="text-xl sm:text-2xl font-medium text-ice-200 leading-snug mb-3">
            “One Universal Smart Reliability &amp; Protection Core with Modular Equipment-Specific Interfaces.”
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            USRPS continuously monitors environmental, electrical, and equipment conditions, executing deterministic, sensor-based embedded control and rule-based environmental responses to keep connected equipment alive in extreme Ladakh environments.
          </p>
        </div>

        {/* The 3 Pillars Callout Banner: ONE CORE + MODULAR INTERFACES + ADAPTIVE PROTECTION */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold">PILLAR 01</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                One Core
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A single centralized deterministic computing core (STM32 Black Pill ARM Cortex-M4) manages sensor acquisition, fault detection, and solid-state protection switching.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[12px] font-medium text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-300" />
              <span>Standardized safety core</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold">PILLAR 02</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Modular Interfaces
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equipment-specific hardware adapters plug into the core without redesigning the system, supporting UAV drones, tactical radios, surveillance cameras, and field sensors.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[12px] font-medium text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-300" />
              <span>Zero core redesign needed</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-transform">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold">PILLAR 03</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Adaptive Protection
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Protection actions respond directly to changing environmental parameters. Subzero cold triggers PID heating; thin air activates arcing suppression protocols.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[12px] font-medium text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-300" />
              <span>Real-time condition responses</span>
            </div>
          </div>

        </div>

        {/* Engineering Philosophy Notice: Explicitly Sensor-based Embedded Control, Not Generic AI */}
        <div className="mb-16 p-4 rounded-lg bg-navy-900 border border-cyan-500/20 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">Reliability Architecture: </strong> 
              USRPS relies on deterministic sensor-based embedded control and rule-based environmental response for sub-millisecond safety guarantees in mission-critical environments.
            </span>
          </div>
          <span className="hidden lg:inline-block text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
            DETERMINISTIC EMBEDDED CONTROL
          </span>
        </div>

        {/* 8 Core Capabilities Grid */}
        <div>
          <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>EIGHT CORE ADAPTIVE PROTECTION CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <div 
                key={cap.num}
                className="p-5 rounded-lg bg-navy-900/60 border border-slate-800 hover:border-ice-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-bold">
                      CAPABILITY {cap.num}
                    </span>
                    <div className="p-1 rounded bg-navy-950 border border-slate-800">
                      {cap.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-mono font-bold text-white mb-2 uppercase group-hover:text-cyan-200 transition-colors">
                    {cap.title}
                  </h4>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
