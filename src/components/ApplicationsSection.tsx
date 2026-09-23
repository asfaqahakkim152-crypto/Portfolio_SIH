import React from 'react';
import { 
  Crosshair, 
  Radio, 
  ShieldAlert, 
  Activity, 
  Microscope, 
  BatteryCharging, 
  Mountain,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      id: "uav",
      title: "UAV / Drone Systems",
      icon: <Crosshair className="w-5 h-5 text-cyan-400" />,
      subzeroChallenge: "Battery freezing causes in-flight power collapse; flight duration cuts from 60min to 20min.",
      usrpsRole: "Keeps drone Li-ion pack in +10°C thermal envelope, monitors surge current, and prevents dielectric trace flashover in thin mountain air.",
      operationalZone: "High-Altitude Surveillance & Reconnaissance"
    },
    {
      id: "comms",
      title: "High-Altitude Communication Systems",
      icon: <Radio className="w-5 h-5 text-ice-300" />,
      subzeroChallenge: "Quartz oscillator temperature drift, signal degradation, and power loss in isolated mountain repeaters.",
      usrpsRole: "Maintains temperature stability, switches to backup LoRa beacons during network blackout, and logs signal SNR.",
      operationalZone: "Mountain Ridge Wireless Repeater Relays"
    },
    {
      id: "defence",
      title: "Defence Electronics",
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
      subzeroChallenge: "Tactical radios and thermal sights failing during night patrols at -30°C in border posts.",
      usrpsRole: "Provides standardized modular plug-and-play power protection, preventing voltage dips under radio transmission bursts.",
      operationalZone: "Forward Operating Bases & Border Patrol Stations"
    },
    {
      id: "remote_mon",
      title: "Remote Monitoring Equipment",
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      subzeroChallenge: "Solar-battery storage failure in unmanned environmental & avalanche monitoring stations.",
      usrpsRole: "Autonomous power optimization, cyclic battery warming, and black-box SD card logging with zero operator intervention.",
      operationalZone: "Glacial Lake & Avalanche Warning Posts"
    },
    {
      id: "science",
      title: "High-Altitude Scientific Instruments",
      icon: <Microscope className="w-5 h-5 text-purple-400" />,
      subzeroChallenge: "Thin atmosphere creates arcing risks in high-voltage detectors and cosmic ray sensors.",
      usrpsRole: "Paschen-based dielectric breakdown monitoring, high-voltage shutdown on pressure dips, and precision sensor bus regulation.",
      operationalZone: "Hanle High Altitude Astronomical & Physics Labs"
    },
    {
      id: "portable",
      title: "Battery-Powered Field Equipment",
      icon: <BatteryCharging className="w-5 h-5 text-amber-400" />,
      subzeroChallenge: "Rapid battery capacity drain on emergency medical defibrillators and handheld survey devices.",
      usrpsRole: "Active battery thermal jacket conditioning, load prioritization, and remaining runtime state-of-health prediction.",
      operationalZone: "Emergency Field Rescue & Medical Kits"
    },
    {
      id: "extreme_env",
      title: "Extreme-Environment Electronics",
      icon: <Mountain className="w-5 h-5 text-sky-400" />,
      subzeroChallenge: "Heavy thermal cycling, severe dust/snow infiltration, and lack of grid infrastructure.",
      usrpsRole: "Ruggedized universal protection interface buffering industrial microcontrollers from external transients.",
      operationalZone: "High-Altitude Construction, Mining & Tunnel Works"
    }
  ];

  return (
    <section id="applications" className="py-24 relative border-t border-slate-800 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Target Deployment Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            WHERE USRPS CAN BE USED
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            The modular interface architecture allows USRPS to safeguard diverse mission-critical payloads across aerospace, national defense, scientific research, and alpine field monitoring without redesigning the primary core.
          </p>
        </div>

        {/* 7 Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div 
              key={app.id}
              className="p-6 rounded-xl tech-panel border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="p-2 rounded bg-navy-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    {app.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {app.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-base font-mono font-bold text-white mb-2 uppercase group-hover:text-cyan-200 transition-colors">
                  {app.title}
                </h3>

                <div className="mb-3 p-2.5 rounded bg-navy-950/70 border border-slate-800 text-xs font-mono text-slate-300">
                  <span className="text-red-400 block text-[10px] uppercase font-bold mb-0.5">High-Altitude Vulnerability:</span>
                  {app.subzeroChallenge}
                </div>

                <div className="p-2.5 rounded bg-navy-950/70 border border-cyan-500/20 text-xs font-mono text-slate-300">
                  <span className="text-cyan-400 block text-[10px] uppercase font-bold mb-0.5">USRPS Adaptive Intervention:</span>
                  {app.usrpsRole}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{app.operationalZone}</span>
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
