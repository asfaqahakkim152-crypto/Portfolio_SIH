import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  Radio, 
  HardDrive, 
  Sliders, 
  BatteryCharging, 
  Info,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { HARDWARE_COMPONENTS } from '../data/projectData';
import { HardwareComponent } from '../types';

export const HardwareSection: React.FC = () => {
  const [selectedCompId, setSelectedCompId] = useState<string>('stm32');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedComp = HARDWARE_COMPONENTS.find(c => c.id === selectedCompId) || HARDWARE_COMPONENTS[0];

  const filteredComponents = filterCategory === 'all' 
    ? HARDWARE_COMPONENTS 
    : HARDWARE_COMPONENTS.filter(c => c.category === filterCategory);

  const categories = [
    { id: 'all', label: `All ${HARDWARE_COMPONENTS.length} Components` },
    { id: 'controller', label: 'Controllers & Processing' },
    { id: 'sensor', label: 'Sensors & Monitoring' },
    { id: 'actuator', label: 'Actuators & Protection' },
    { id: 'storage', label: 'Black-Box Storage' },
    { id: 'communication', label: 'Long-Range RF' },
    { id: 'display', label: 'Local HUD' },
    { id: 'power', label: 'Power System' },
  ];

  return (
    <section id="hardware" className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Industrial Hardware Bill of Materials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            ENGINEERED HARDWARE
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Every component in the USRPS architecture is specifically chosen for subzero resilience (-40°C rated), low-pressure operation (&lt;50 kPa), low thermal coefficient of expansion drift, and fast hardware interrupt responsiveness.
          </p>
        </div>

        {/* Filter Category Bar */}
        <div className="flex flex-wrap gap-1.5 mb-8 p-1.5 rounded-lg bg-navy-900 border border-slate-800 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded transition-all ${
                filterCategory === cat.id
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two-Column Explorer: Left Component Grid, Right Deep Technical Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Component Cards List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[720px] overflow-y-auto pr-1">
            {filteredComponents.map((comp, idx) => {
              const isSelected = comp.id === selectedCompId;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedCompId(comp.id)}
                  className={`w-full p-3.5 rounded-lg text-left transition-all border flex items-start justify-between group ${
                    isSelected
                      ? 'bg-navy-850 border-cyan-400 shadow-md shadow-cyan-500/10'
                      : 'bg-navy-900/60 border-slate-800 hover:border-slate-700 hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-navy-950 border border-slate-800 flex items-center justify-center text-[11px] font-mono text-cyan-300 font-bold shrink-0 mt-0.5">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {comp.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {comp.role}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Component Detailed Technical Spec Card */}
          <div className="lg:col-span-7">
            <div className="rounded-xl tech-panel border-cyan-500/30 p-6 sm:p-8">
              
              {/* Top Header of Dossier */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase font-bold">
                      {selectedComp.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      ID: {selectedComp.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase">
                    {selectedComp.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {selectedComp.role}
                  </p>
                </div>

                {/* Visual Thumbnail */}
                {selectedComp.imageUrl && (
                  <div className="w-20 h-20 rounded-lg bg-navy-950 border border-slate-800 p-2 flex items-center justify-center overflow-hidden shrink-0">
                    <img 
                      src={selectedComp.imageUrl} 
                      alt={selectedComp.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow" 
                    />
                  </div>
                )}
              </div>

              {/* Technical Specifications Breakdown */}
              <div className="space-y-4">
                
                {/* 1. Input / Output */}
                <div className="p-3.5 rounded-lg bg-navy-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    [1] Electrical / Logical Input &amp; Output
                  </span>
                  <p className="text-xs font-mono text-slate-200">
                    {selectedComp.inputOutput}
                  </p>
                </div>

                {/* 2. Why It Is Required in Ladakh */}
                <div className="p-3.5 rounded-lg bg-navy-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    [2] Why Required for Ladakh Extreme Altitude
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedComp.whyRequired}
                  </p>
                </div>

                {/* 3. Connection to USRPS */}
                <div className="p-3.5 rounded-lg bg-navy-950/80 border border-cyan-500/20">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block mb-1">
                    [3] Physical &amp; Logical Connection to USRPS
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedComp.usrpsConnection}
                  </p>
                </div>

                {/* 4. Verified Key Specifications */}
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Verified Operating Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedComp.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-2 rounded bg-navy-900 border border-slate-800 text-[11px] font-mono text-ice-200 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
