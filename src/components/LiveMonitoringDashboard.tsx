import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ExternalLink, 
  Thermometer, 
  Gauge, 
  Droplets, 
  Zap, 
  Battery, 
  Sun, 
  Radio, 
  ShieldCheck, 
  AlertCircle,
  Eye,
  Sliders,
  CheckCircle2,
  Clock,
  HardDrive
} from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

interface LiveMonitoringDashboardProps {
  dashboardUrl: string;
}

export const LiveMonitoringDashboard: React.FC<LiveMonitoringDashboardProps> = ({ dashboardUrl }) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'screenshot'>('interactive');
  
  // Real-time jitter for live telemetry feel
  const [telemetry, setTelemetry] = useState({
    temp: -12.4,
    pressure: 58,
    humidity: 22,
    voltage: 12.4,
    current: 2.6,
    power: 32.2,
    batteryHealth: 82,
    radiation: 82, // µSv/h
    loraRssi: -72,
    status: 'NORMAL',
    lastPacket: 'Just now'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        ...prev,
        temp: Number((prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        voltage: Number((prev.voltage + (Math.random() * 0.1 - 0.05)).toFixed(1)),
        current: Number((prev.current + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        power: Number(((prev.voltage + 0.1) * (prev.current + 0.1)).toFixed(1)),
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="monitoring" className="py-24 relative border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Prominent Live Dashboard Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[12px] font-medium text-slate-300">
              <Activity className="w-3.5 h-3.5 text-slate-400" />
              <span>Real-Time Operator Telemetry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Live System Monitoring
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Continuous multi-parameter surveillance streaming from the USRPS hardware module in Ladakh: monitoring ambient thermal stress, barometric pressure, bus voltage sag, equipment health, and offline storage.
            </p>
          </div>

          {/* OPEN LIVE DASHBOARD CTA BUTTON */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex rounded-lg bg-white/5 p-1 border border-white/10 text-sm font-medium">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-4 py-2 rounded-md transition-all ${
                  viewMode === 'interactive' 
                    ? 'bg-white/10 text-white font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Simulated View
              </button>
              <button
                onClick={() => setViewMode('screenshot')}
                className={`px-4 py-2 rounded-md transition-all ${
                  viewMode === 'screenshot' 
                    ? 'bg-white/10 text-white font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Actual Dashboard Capture
              </button>
            </div>

            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-navy-950 bg-white hover:bg-slate-200 transition-colors shadow-sm"
            >
              <Activity className="w-4 h-4" />
              <span>Open Live Dashboard</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>

        {/* View Mode 1: Interactive Engineering HUD Widgets */}
        {viewMode === 'interactive' && (
          <div className="space-y-6">
            
            {/* Top Status Strip */}
            <div className="p-4 rounded-xl tech-panel border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  SYSTEM STATUS: OPERATIONAL
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  DEVICE ID: <strong className="text-white">LSH-24-06-001</strong>
                </span>
                <span className="text-slate-400 hidden md:inline">
                  LOCATION: <strong className="text-white">LADAKH HAA (4,850m)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <span>FIRMWARE: <strong className="text-white">v2.3.7</strong></span>
                <span className="text-slate-700">|</span>
                <span>SECURITY: <strong className="text-emerald-400">ENCRYPTED</strong></span>
              </div>
            </div>

            {/* 10 Dashboard-Style Widgets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Widget 1: Temperature */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-cyan-400" />
                    Temperature
                  </span>
                  <span className="text-[10px] text-cyan-300">(-40 to 60°C)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.temp} <span className="text-sm font-normal text-cyan-300">°C</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full" style={{ width: '42%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                  <span>Extreme Cold Subzero</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
              </div>

              {/* Widget 2: Pressure */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-ice-300" />
                    Baro Pressure
                  </span>
                  <span className="text-[10px] text-ice-300">(50 to 110 kPa)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.pressure} <span className="text-sm font-normal text-ice-200">kPa</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full rounded-full" style={{ width: '55%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-amber-400 flex items-center justify-between">
                  <span>Low Pressure / Thin Air</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
              </div>

              {/* Widget 3: Humidity */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-sky-400" />
                    Humidity
                  </span>
                  <span className="text-[10px] text-sky-300">(0 to 100%)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.humidity} <span className="text-sm font-normal text-sky-300">%</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: '22%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Arid Alpine Regime</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                </div>
              </div>

              {/* Widget 4: Battery Voltage */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Bus Voltage
                  </span>
                  <span className="text-[10px] text-emerald-300">(10 to 14V)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.voltage} <span className="text-sm font-normal text-emerald-300">V</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                  <span>Stable LiFePO4 Bus</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              {/* Widget 5: Battery Current */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-blue-400" />
                    Load Current
                  </span>
                  <span className="text-[10px] text-blue-300">(0 to 10A)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.current} <span className="text-sm font-normal text-blue-300">A</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '28%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-blue-400 flex items-center justify-between">
                  <span>INA219 Shunt Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
              </div>

              {/* Widget 6: Power Consumption */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-purple-400" />
                    Total Power
                  </span>
                  <span className="text-[10px] text-purple-300">(0 to 100W)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.power} <span className="text-sm font-normal text-purple-300">W</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '32%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-purple-400 flex items-center justify-between">
                  <span>Core + PTC Element</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
              </div>

              {/* Widget 7: Battery Health */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Battery className="w-4 h-4 text-emerald-400" />
                    Battery Health
                  </span>
                  <span className="text-[10px] text-emerald-300">State of Health</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.batteryHealth} <span className="text-sm font-normal text-emerald-300">%</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                  <span>Rem. Run: 06h:45m</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              {/* Widget 8: UV / Radiation */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400" />
                    Radiation
                  </span>
                  <span className="text-[10px] text-amber-300">(0 to 200 µSv/h)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-2">
                  {telemetry.radiation} <span className="text-sm font-normal text-amber-300">µSv/h</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '41%' }}></div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-amber-400 flex items-center justify-between">
                  <span>Enhanced Solar UV</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
              </div>

              {/* Widget 9: Communication Status */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-cyan-400" />
                    Comms Status
                  </span>
                  <span className="text-[10px] text-emerald-400">Connected</span>
                </div>
                <div className="text-lg font-mono font-bold text-white mb-2">
                  LoRa 433MHz + 4G
                </div>
                <div className="text-xs font-mono text-cyan-300 mb-1">
                  Signal: {telemetry.loraRssi} dBm
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Loss: 0.3% | Uptime: 02:18h</span>
                </div>
              </div>

              {/* Widget 10: System Health & Protection */}
              <div className="p-4 rounded-xl tech-panel border-slate-800 hover:border-emerald-400/40 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Protection Status
                  </span>
                  <span className="text-[10px] text-emerald-400">Active</span>
                </div>
                <div className="text-lg font-mono font-bold text-emerald-300 mb-2">
                  NORMAL / ARMORED
                </div>
                <div className="text-xs font-mono text-slate-300 mb-1">
                  Heater PID: Running
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>SD Black-Box: Active</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>

            </div>

            {/* Equipment Health Matrix Strip (as captured in real dashboard) */}
            <div className="p-5 rounded-xl tech-panel border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
                <span className="text-cyan-300 font-bold uppercase">CONNECTED MODULAR EQUIPMENT SUBSYSTEMS</span>
                <span className="text-slate-500">Real-Time Load Impedance &amp; Temp Status</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: "Drone / UAV", temp: "-18°C", health: "82%", status: "NORMAL" },
                  { name: "Radar Station", temp: "-20°C", health: "90%", status: "NORMAL" },
                  { name: "Tactical Radio", temp: "-22°C", health: "88%", status: "NORMAL" },
                  { name: "Field Computer", temp: "-19°C", health: "85%", status: "NORMAL" },
                  { name: "Battery Pack", temp: "-20°C", health: "82%", status: "NORMAL" },
                  { name: "Power Module", temp: "-18°C", health: "87%", status: "NORMAL" },
                ].map((eq) => (
                  <div key={eq.name} className="p-3 rounded bg-navy-950 border border-slate-800 text-center text-xs font-mono">
                    <div className="text-white font-bold truncate mb-1">{eq.name}</div>
                    <div className="text-emerald-400 text-[10px] font-semibold mb-1">● {eq.status}</div>
                    <div className="text-slate-400 text-[10px]">{eq.temp} • {eq.health}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* View Mode 2: Real Dashboard Screenshot Capture */}
        {viewMode === 'screenshot' && (
          <div className="rounded-xl overflow-hidden tech-panel border-cyan-500/40 p-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-cyan-300 font-bold">ACTUAL LADAKH-SHIELD OPERATOR WEB DASHBOARD INTERFACE</span>
              <span className="text-slate-400">Captured from Live Cloud Environment</span>
            </div>
            
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-black">
              <img 
                src="/assets/dashboard-full.jpeg" 
                alt="Full LADAKH-SHIELD USRPS operator dashboard interface" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span>Full UI features telemetry gauges, offline data logging sync, sensor trends, and alarm registers.</span>
              <a
                href={dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold"
              >
                <span>Open Dashboard in Separate Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
