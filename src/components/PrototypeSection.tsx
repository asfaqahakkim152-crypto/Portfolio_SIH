import React, { useState } from 'react';
import { 
  Cpu, 
  ExternalLink, 
  Play, 
  Layers, 
  Activity, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Eye,
  Camera,
  Maximize2
} from 'lucide-react';

interface PrototypeSectionProps {
  onOpenVideo: () => void;
  dashboardUrl: string;
}

export const PrototypeSection: React.FC<PrototypeSectionProps> = ({ onOpenVideo, dashboardUrl }) => {
  const [selectedImage, setSelectedImage] = useState<string>('bench');

  const progressionSteps = [
    {
      stage: "01",
      title: "CONCEPT",
      desc: "Architecting 'One Universal Core + Modular Interfaces' to solve Ladakh subzero & low-pressure equipment failure."
    },
    {
      stage: "02",
      title: "CIRCUIT",
      desc: "Schematic design with STM32 Black Pill, isolated I2C bus, low-loss MOSFET switches, and closed-loop heating."
    },
    {
      stage: "03",
      title: "MINI PROTOTYPE",
      desc: "Breadboard verification of sensor data gathering, threshold timing interrupts, and power bus stability."
    },
    {
      stage: "04",
      title: "TESTING",
      desc: "Subzero thermal chamber chilling down to -25°C, simulated load switching on drone & radio circuits."
    },
    {
      stage: "05",
      title: "MONITORING",
      desc: "Integration with real-time operator web HUD, offline SD circular buffer, and Sub-GHz LoRa RF link."
    },
    {
      stage: "06",
      title: "FIELD-READY CONCEPT",
      desc: "Ruggedized IP67 enclosure with sealed mil-spec connectors ready for validation in Ladakh HAA/SHAA."
    }
  ];

  return (
    <section id="prototype" className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Live Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Physical Engineering Artifact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
              FROM CONCEPT TO PROTOTYPE
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Witness the physical USRPS prototype. Engineered from fundamental physics principles into a functional, bench-tested hardware unit protecting representative defense drone, tactical radio, and battery loads.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-ice-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Activity className="w-3.5 h-3.5 text-navy-950" />
              <span>VIEW LIVE DASHBOARD</span>
              <ExternalLink className="w-3 h-3 text-navy-950" />
            </a>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-medium text-slate-200 bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-red-400/40 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
              <span>WATCH PROJECT DEMO</span>
            </button>
          </div>
        </div>

        {/* 6-Stage Horizontal Progression Flow */}
        <div className="mb-16">
          <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>ENGINEERING DEVELOPMENT MATURITY PROGRESSION</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {progressionSteps.map((step, idx) => (
              <div 
                key={step.stage}
                className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                      {step.stage}
                    </span>
                    {idx < progressionSteps.length - 1 && (
                      <span className="hidden lg:block text-slate-600 font-mono">→</span>
                    )}
                  </div>
                  
                  <h4 className="text-xs font-mono font-bold text-white mb-1.5 uppercase">
                    {step.title}
                  </h4>
                  
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centerpiece Prototype Showcase */}
        <div className="rounded-xl tech-panel border-cyan-500/30 p-6 sm:p-8">
          
          {/* Showcase Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
            <div className="flex rounded bg-navy-950 p-1 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setSelectedImage('bench')}
                className={`px-3 py-1.5 rounded transition-all ${
                  selectedImage === 'bench' 
                    ? 'bg-navy-800 text-cyan-300 font-bold border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Full Hardware Bench Setup
              </button>
              <button
                onClick={() => setSelectedImage('module')}
                className={`px-3 py-1.5 rounded transition-all ${
                  selectedImage === 'module' 
                    ? 'bg-navy-800 text-cyan-300 font-bold border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                USRPS Core Enclosure
              </button>
              <button
                onClick={() => setSelectedImage('power')}
                className={`px-3 py-1.5 rounded transition-all ${
                  selectedImage === 'power' 
                    ? 'bg-navy-800 text-cyan-300 font-bold border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Power Electronics &amp; Switching
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400">
              PHYSICAL HARDWARE SPECIFICATION: <strong className="text-white">PROTOTYPE REV 2.3</strong>
            </div>
          </div>

          {/* Active Photo Container with Technical Annotations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 relative rounded-lg overflow-hidden border border-slate-800 bg-black">
              {selectedImage === 'bench' && (
                <div className="relative">
                  <img 
                    src="/assets/prototype-bench-setup.png" 
                    alt="Physical prototype bench setup with drone, tactical radio, power supply, and LADAKH-SHIELD core" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-navy-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold backdrop-blur-md">
                    BENCH INTEGRATION: DRONE + RADIO + POWER LOADS
                  </div>
                </div>
              )}

              {selectedImage === 'module' && (
                <div className="relative">
                  <img 
                    src="/assets/usrps-module-raw.jpg" 
                    alt="High resolution studio photograph of the USRPS hardware module" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-navy-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold backdrop-blur-md">
                    USRPS CORE: SENSORS + OLED HUD + MODULAR INTERFACES
                  </div>
                </div>
              )}

              {selectedImage === 'power' && (
                <div className="relative">
                  <img 
                    src="/assets/circuit-power-board.jpg" 
                    alt="Power conditioning and solid state protection electronics board" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-navy-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold backdrop-blur-md">
                    POWER SWITCHING &amp; HIGH-VOLTAGE ISOLATION
                  </div>
                </div>
              )}
            </div>

            {/* Right: Technical Highlights of the Prototype */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  [A] Central Controller &amp; Display
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  On-chassis 0.96-inch OLED displays local telemetry: Temp (-12.4°C), Pressure (615 hPa), Bus Voltage (12.3V), Current (0.8A), and Battery State (82%).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
                <span className="text-[10px] font-mono text-ice-300 uppercase tracking-wider block mb-1">
                  [B] Modular Interface Connectors
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Heavy-duty bottom connector rail allows plug-and-play swapping between UAV drones, handheld VHF/UHF tactical radios, and perimeter sensor nodes without soldering.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  [C] Protection Circuitry Array
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Solid-state MOSFET protection module and fused relay circuits isolate transient shorts in under 2 microseconds to protect delicate onboard computers.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  [D] Thermal Enclosure &amp; Heating Pad
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Internal PTC silicone heater pad maintains localized thermal envelope above freezing for battery cells and precision quartz oscillators.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
