import React from 'react';
import { 
  Globe, 
  Layers, 
  Sliders, 
  HardDrive, 
  Activity, 
  Coins, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      id: "universal",
      badge: "PILLAR 01",
      title: "UNIVERSAL",
      summary: "One single protection core can support diverse electronic equipment through modular adapters.",
      details: "Instead of engineering bespoke thermal enclosures and battery managers for every single device, USRPS standardizes the core intelligence, power switching, and sensing engine into one unified unit.",
      icon: <Globe className="w-5 h-5 text-cyan-400" />
    },
    {
      id: "modular",
      badge: "PILLAR 02",
      title: "MODULAR",
      summary: "Equipment-specific interfaces can be added without redesigning the complete system.",
      details: "Whether docking a 12V UAV drone, a 24V tactical border radio, or a 5V environmental sensor, custom interface cables and shunt adapters plug into standardized mil-grade terminal blocks.",
      icon: <Layers className="w-5 h-5 text-ice-300" />
    },
    {
      id: "adaptive",
      badge: "PILLAR 03",
      title: "ADAPTIVE",
      summary: "Protection actions respond in real-time to changing environmental and electrical conditions.",
      details: "Not a dumb static resistor or passive blanket: dynamic PID control modulates heating duty cycle based on ambient thermal slope, while Paschen algorithms dynamically adjust trace voltage safety margins.",
      icon: <Sliders className="w-5 h-5 text-emerald-400" />
    },
    {
      id: "offline",
      badge: "PILLAR 04",
      title: "OFFLINE-FIRST",
      summary: "Critical monitoring and logging continue uninterrupted even when communication is completely unavailable.",
      details: "Himalayan RF shadows and electronic jamming do not affect protection. SPI MicroSD black-box logging records second-by-second audit trails locally with auto-flush on fault trip.",
      icon: <HardDrive className="w-5 h-5 text-purple-400" />
    },
    {
      id: "multi_param",
      badge: "PILLAR 05",
      title: "MULTI-PARAMETER",
      summary: "Temperature, pressure, humidity, voltage, current, battery and environmental conditions are monitored together.",
      details: "True physical sensor fusion. Evaluates interdependent degradation curves—e.g. how high current draw under subzero temperature accelerates battery voltage collapse versus high altitude trace arcing.",
      icon: <Activity className="w-5 h-5 text-amber-400" />
    },
    {
      id: "low_cost",
      badge: "PILLAR 06",
      title: "LOW-COST PROTOTYPE",
      summary: "Designed around accessible embedded hardware and modular electronics for high scalability.",
      details: "Leverages standard STM32 Black Pill silicon combined with precision industrial sensors. Delivers aerospace-grade protection logic at a fraction of the cost of proprietary military units.",
      icon: <Coins className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section className="py-24 relative border-t border-slate-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Competitive Architectural Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            WHAT MAKES USRPS DIFFERENT?
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Conventional high-altitude electronics solutions rely on bulky, passive insulated cases or proprietary single-device redesigns. USRPS introduces a modular, adaptive, and accessible paradigm.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff) => (
            <div 
              key={diff.id}
              className="p-6 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                    {diff.badge}
                  </span>
                  <div className="p-1.5 rounded bg-navy-950 border border-slate-800">
                    {diff.icon}
                  </div>
                </div>

                <h3 className="text-lg font-mono font-bold text-white mb-2 uppercase group-hover:text-cyan-200 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs font-semibold text-ice-300 mb-3 leading-relaxed">
                  {diff.summary}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {diff.details}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in Bench Prototype</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
