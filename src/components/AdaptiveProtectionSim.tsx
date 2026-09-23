import React, { useState } from 'react';
import { 
  Sliders, 
  ThermometerSnowflake, 
  Flame, 
  BatteryWarning, 
  ZapOff, 
  WifiOff, 
  Sun, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle,
  Play,
  RotateCcw
} from 'lucide-react';
import { ADAPTIVE_RULES } from '../data/projectData';

export const AdaptiveProtectionSim: React.FC = () => {
  // Interactive Environmental Simulator State
  const [altitude, setAltitude] = useState<number>(4850); // meters AMSL (e.g. Khardung La approach)
  const [temperature, setTemperature] = useState<number>(-22); // °C

  // Derived Physical Parameters based on altitude & temp
  // Barometric pressure drops approximately with altitude: P = 101.3 * (1 - 2.25577e-5 * h)^5.25588
  const pressureKpa = Math.round(101.3 * Math.pow(1 - 0.0000225577 * altitude, 5.25588));
  
  // Real-time protection logic evaluation
  const isHeaterActive = temperature < 0;
  const heaterDuty = temperature < -25 ? 100 : temperature < -10 ? 70 : temperature < 0 ? 35 : 0;
  const isArcingRiskHigh = pressureKpa < 58;
  const isBatteryStressed = temperature < -15;
  const isExtremeAltitude = altitude > 4500;

  const resetToKhardungLa = () => {
    setAltitude(5359);
    setTemperature(-28);
  };

  const resetToLehBase = () => {
    setAltitude(3500);
    setTemperature(-10);
  };

  const resetToNominal = () => {
    setAltitude(1500);
    setTemperature(18);
  };

  return (
    <section id="adaptive-protection" className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deterministic Cause &amp; Effect Logic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            ADAPTIVE PROTECTION
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Real engineering cause-and-effect relationships. USRPS does not make arbitrary guesses: physical sensor readings trigger deterministic firmware protection routines within sub-millisecond hardware thresholds.
          </p>
        </div>

        {/* Interactive Simulation Console for Jury Demonstration */}
        <div className="mb-16 p-6 sm:p-8 rounded-xl tech-panel border-cyan-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <h3 className="text-base font-mono font-bold text-white uppercase">
                  LIVE INTERACTIVE LADAKH ALTITUDE &amp; CLIMATE SIMULATOR
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Adjust altitude and temperature to witness USRPS adaptive firmware trigger real-time protection protocols.
              </p>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 hidden sm:inline">Presets:</span>
              <button 
                onClick={resetToKhardungLa} 
                className="px-2.5 py-1 rounded bg-navy-900 border border-slate-700 text-cyan-300 hover:border-cyan-400"
              >
                Khardung La (5359m)
              </button>
              <button 
                onClick={resetToLehBase} 
                className="px-2.5 py-1 rounded bg-navy-900 border border-slate-700 text-ice-300 hover:border-ice-400"
              >
                Leh Valley (3500m)
              </button>
              <button 
                onClick={resetToNominal} 
                className="px-2.5 py-1 rounded bg-navy-900 border border-slate-700 text-slate-400 hover:text-white"
              >
                Nominal
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Slider 1: Altitude */}
            <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-400 uppercase">Simulated Elevation:</span>
                <span className="text-cyan-300 font-bold text-sm">{altitude} m AMSL</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="6500" 
                step="50"
                value={altitude}
                onChange={(e) => setAltitude(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-navy-900 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                <span>1,000m (Base)</span>
                <span>3,500m (Leh)</span>
                <span>5,359m (Khardung La)</span>
                <span>6,500m (Siachen Ridge)</span>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-900 text-xs font-mono text-slate-300 flex justify-between">
                <span>Calculated Air Pressure:</span>
                <span className="text-ice-300 font-bold">{pressureKpa} kPa</span>
              </div>
            </div>

            {/* Slider 2: Ambient Temperature */}
            <div className="p-4 rounded-lg bg-navy-950 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-400 uppercase">Ambient Temperature:</span>
                <span className={`font-bold text-sm ${temperature < 0 ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {temperature} °C
                </span>
              </div>
              <input 
                type="range" 
                min="-40" 
                max="25" 
                step="1"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-navy-900 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                <span>-40°C (Extreme Subzero)</span>
                <span>-20°C (Freezing)</span>
                <span>0°C (Freezing Point)</span>
                <span>+25°C (Nominal)</span>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-900 text-xs font-mono text-slate-300 flex justify-between">
                <span>Internal Battery Temp (Simulated):</span>
                <span className="text-cyan-300 font-bold">
                  {isHeaterActive ? '+8.5 °C (Heated)' : `${temperature} °C`}
                </span>
              </div>
            </div>

          </div>

          {/* Active Protection State Annunciator */}
          <div className="p-4 rounded-lg bg-navy-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="text-slate-400">USRPS CONTROLLER STATUS:</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
                {isHeaterActive || isArcingRiskHigh ? 'ACTIVE ADAPTIVE INTERVENTION' : 'MONITORING / STANDBY'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className={`px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                isHeaterActive 
                  ? 'bg-red-950/70 border-red-500 text-red-300 font-bold animate-pulse' 
                  : 'bg-navy-900 border-slate-800 text-slate-500'
              }`}>
                PTC HEATER: {isHeaterActive ? `PWM ON (${heaterDuty}%)` : 'OFF'}
              </span>

              <span className={`px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                isArcingRiskHigh 
                  ? 'bg-amber-950/70 border-amber-500 text-amber-300 font-bold' 
                  : 'bg-navy-900 border-slate-800 text-slate-500'
              }`}>
                PASCHEN GUARD: {isArcingRiskHigh ? 'THROTTLED dV/dt' : 'NORMAL'}
              </span>

              <span className={`px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                isBatteryStressed 
                  ? 'bg-orange-950/70 border-orange-500 text-orange-300 font-bold' 
                  : 'bg-navy-900 border-slate-800 text-slate-500'
              }`}>
                LOAD SHEDDING: {isBatteryStressed ? 'AUX RAILS OFF' : 'NORMAL'}
              </span>
            </div>
          </div>

        </div>

        {/* Cause-and-Effect Engineering Relationships Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>SIX HARDWARE &amp; FIRMWARE PROTECTION RULES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ADAPTIVE_RULES.map((rule) => (
              <div 
                key={rule.id}
                className="p-5 rounded-xl tech-panel border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                      {rule.id.toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                      rule.severity === 'critical' ? 'bg-red-500/20 text-red-300 border border-red-500/40' :
                      rule.severity === 'high' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    }`}>
                      {rule.severity} RISK
                    </span>
                  </div>

                  {/* Trigger -> Action banner */}
                  <div className="p-3 rounded bg-navy-950 border border-slate-800/80 mb-3">
                    <div className="text-[10px] font-mono text-slate-400 mb-0.5">CAUSE (ENVIRONMENT / SENSOR TRIGGER):</div>
                    <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                      {rule.triggerCondition}
                    </div>

                    <div className="flex items-center gap-1.5 text-cyan-400 my-1 font-mono text-xs">
                      <span>↓ FIRMWARE RESPONSE ACTION</span>
                    </div>

                    <div className="text-xs font-mono font-bold text-emerald-300">
                      {rule.actionTaken}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong className="text-white font-semibold">Rationale: </strong>
                    {rule.engineeringRationale}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-start gap-1.5">
                  <span className="text-cyan-400">Impact:</span>
                  <span>{rule.systemImpact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
