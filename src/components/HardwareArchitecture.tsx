import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Radio, 
  Activity, 
  ShieldAlert, 
  Zap, 
  Database, 
  ArrowDown, 
  ArrowRight,
  Thermometer,
  Gauge,
  Droplets,
  Sun,
  Battery,
  AlertCircle,
  HardDrive,
  Monitor
} from 'lucide-react';

export const HardwareArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('core');

  return (
    <section className="py-24 relative border-t border-slate-800 bg-navy-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive System Topology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            HARDWARE ARCHITECTURE
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            The USRPS layered hardware topology decouples environmental acquisition, real-time safety decisioning, peripheral protection switching, and long-range telemetry dissemination.
          </p>
        </div>

        {/* Clean Interactive Architecture Schematic */}
        <div className="rounded-xl tech-panel border-cyan-500/30 p-6 sm:p-10 max-w-5xl mx-auto">
          
          {/* LEVEL 1: INPUT SENSING LAYER (Split into Environmental Sensors & Electrical Monitoring) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
            {/* Environmental Sensors */}
            <div className="p-4 rounded-lg bg-navy-950 border border-slate-800 hover:border-cyan-400/50 transition-all">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                  Environmental Sensors
                </span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded">I2C / ADC</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  <span>Temperature</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  <span>Baro Pressure</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  <span>Rel Humidity</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  <span>UV / Radiation</span>
                </div>
              </div>
            </div>

            {/* Electrical Monitoring */}
            <div className="p-4 rounded-lg bg-navy-950 border border-slate-800 hover:border-cyan-400/50 transition-all">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  Electrical Monitoring
                </span>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded">INA219 I2C</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  <span>Bus Voltage</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  <span>Load Current</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-navy-900 border border-slate-800">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  <span>Battery Status</span>
                </div>
              </div>
            </div>

          </div>

          {/* DOWN ARROW */}
          <div className="flex justify-center my-2 text-cyan-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* LEVEL 2: PRIMARY EMBEDDED CONTROLLER CORE (STM32 Black Pill Cortex-M4) */}
          <div className="p-5 sm:p-6 rounded-xl bg-navy-950 border-2 border-cyan-400/80 shadow-xl shadow-cyan-500/10 my-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Primary Controller Core */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 tracking-wider font-bold">PRIMARY EMBEDDED CONTROL CORE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
                  STM32 BLACK PILL (ARM CORTEX-M4)
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  32-Bit ARM Cortex-M4 @ 100MHz with Hardware FPU • Deterministic Real-Time Protection Loop • Microsecond Fault Interrupts
                </p>
              </div>

              {/* Hardware Performance Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-center text-[10px] font-mono shrink-0">
                <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                  <span className="text-cyan-300 font-bold block">100 MHz FPU</span>
                  <span className="text-slate-400">Hard Real-Time</span>
                </div>
                <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                  <span className="text-emerald-300 font-bold block">&lt; 12 Cycles</span>
                  <span className="text-slate-400">Interrupt Latency</span>
                </div>
                <div className="p-2.5 rounded bg-navy-900 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-ice-300 font-bold block">-40°C to +85°C</span>
                  <span className="text-slate-400">HAA Qualified</span>
                </div>
              </div>

            </div>
          </div>

          {/* DOWN ARROW */}
          <div className="flex justify-center my-2 text-cyan-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* LEVEL 3: RISK / CONDITION ANALYSIS LAYER */}
          <div className="p-4 rounded-lg bg-navy-950 border border-amber-500/40 text-center my-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                RISK / CONDITION ANALYSIS ENGINE
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl mx-auto">
              Evaluates Paschen dielectric breakdown risks, cell freeze boundaries, instantaneous voltage collapse gradients, and multi-sensor fault triggers.
            </p>
          </div>

          {/* DOWN ARROW */}
          <div className="flex justify-center my-2 text-cyan-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* LEVEL 4: PROTECTION LAYER */}
          <div className="p-5 rounded-lg bg-navy-950 border border-red-500/40 my-2">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-red-400" />
                PROTECTION LAYER (ACTUATION &amp; CONTROL)
              </span>
              <span className="text-[10px] font-mono text-red-300 bg-red-500/10 px-2 py-0.5 rounded">Hardware Response</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono text-slate-200">
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <span className="text-cyan-300 block font-bold">PTC Heater</span>
                <span className="text-[10px] text-slate-400">Closed-Loop PID</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <span className="text-red-300 block font-bold">MOSFET Trip</span>
                <span className="text-[10px] text-slate-400">&lt; 2µs Isolation</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <span className="text-emerald-300 block font-bold">Power Control</span>
                <span className="text-[10px] text-slate-400">Load Shedding</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <span className="text-amber-300 block font-bold">Buzzer / LED</span>
                <span className="text-[10px] text-slate-400">Field Alarms</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-ice-300 block font-bold">Adaptive Profile</span>
                <span className="text-[10px] text-slate-400">Dynamic Throttling</span>
              </div>
            </div>
          </div>

          {/* DOWN ARROW */}
          <div className="flex justify-center my-2 text-cyan-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* LEVEL 5: DATA & TELEMETRY LAYER */}
          <div className="p-5 rounded-lg bg-navy-950 border border-cyan-500/30 my-2">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                <Database className="w-4 h-4 text-cyan-400" />
                DATA LAYER (PERSISTENCE &amp; TELEMETRY)
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">Telemetry</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono text-slate-200">
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <Monitor className="w-4 h-4 mx-auto mb-1 text-ice-300" />
                <span className="font-bold block">OLED Display</span>
                <span className="text-[10px] text-slate-400">Real-Time Local HUD</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <HardDrive className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                <span className="font-bold block">SD Card Module</span>
                <span className="text-[10px] text-slate-400">Offline CSV Audit Log</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <Radio className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                <span className="font-bold block">LoRa SX1278</span>
                <span className="text-[10px] text-slate-400">Long-Range 433MHz Beacon</span>
              </div>
              <div className="p-2.5 rounded bg-navy-900 border border-slate-800">
                <Activity className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                <span className="font-bold block">Field Dashboard</span>
                <span className="text-[10px] text-slate-400">Live Operator Web HUD</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
