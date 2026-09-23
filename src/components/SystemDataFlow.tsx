import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Cpu, 
  Radio, 
  Gauge, 
  ShieldAlert, 
  CheckCircle, 
  Zap, 
  HardDrive, 
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';

export const SystemDataFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Primary Controller

  const flowSteps = [
    {
      id: 0,
      name: "ENVIRONMENT",
      badge: "SOURCE",
      role: "Extreme Ambient Conditions",
      details: "Ambient Ladakh atmosphere with subzero cold (-40°C), low air density (<50 kPa), high cosmic/solar UV radiation, and heavy thermal wind differentials.",
      telemetry: "Temp: -25°C | Pressure: 54 kPa | UV: 9.8 Index",
      color: "border-sky-500/40 text-sky-300"
    },
    {
      id: 1,
      name: "SENSORS",
      badge: "SENSING LAYER",
      role: "Multi-Parameter Instrumentation",
      details: "BME280 (Temp, Barometric Pressure, Humidity), INA219/INA226 (Bus Voltage, Load Current), and GUVA UV photodiode collect analog and digital physical parameters.",
      telemetry: "Sample Rate: 10 Hz | Isolated I2C Bus + 12-bit ADC",
      color: "border-cyan-500/40 text-cyan-300"
    },
    {
      id: 2,
      name: "PRIMARY CONTROLLER",
      badge: "CENTRAL PROCESSING CORE",
      role: "STM32 Black Pill (ARM Cortex-M4)",
      details: "Deterministic hard real-time safety loop. Directly executes condition evaluation, PID thermal algorithm, interrupt triggers, and hardware gate driving with sub-millisecond latency.",
      telemetry: "STM32F411 @ 84MHz | FreeRTOS / Bare-Metal | <1ms Fault Trip",
      color: "border-cyan-400 text-cyan-200"
    },
    {
      id: 3,
      name: "RISK ANALYSIS",
      badge: "EVALUATION LAYER",
      role: "Rule-Based Environmental Math",
      details: "Computes Paschen dielectric breakdown margins, battery internal resistance (ESR) voltage collapse gradients, and thermal contraction differential vectors.",
      telemetry: "ΔT/dt > 2°C/min | V_sag threshold checking",
      color: "border-amber-500/40 text-amber-300"
    },
    {
      id: 4,
      name: "PROTECTION DECISION",
      badge: "LOGIC EXECUTION",
      role: "Deterministic State Machine",
      details: "Determines corrective actuation: PWM duty cycle for heater, dV/dt slew rate throttling for arcing prevention, load shedding, or emergency isolation.",
      telemetry: "Decision Matrix: PID Heat Mode + Insulation Guard Active",
      color: "border-emerald-500/40 text-emerald-300"
    },
    {
      id: 5,
      name: "ACTUATOR / CIRCUIT",
      badge: "ACTUATION LAYER",
      role: "Solid-State MOSFETs & PTC Heater",
      details: "High-current solid-state power switches isolate faulty equipment within 2 microseconds; PTC silicone heater heats battery enclosure to maintain +10°C.",
      telemetry: "MOSFET R_DS(on) < 5mΩ | Heating Power: 18W Closed-Loop",
      color: "border-red-500/40 text-red-300"
    },
    {
      id: 6,
      name: "DATA LOGGING",
      badge: "OFFLINE STORAGE",
      role: "SPI MicroSD Black-Box Archive",
      details: "All sensor readings, fault trips, and actuation records are saved to an industrial flash memory circular buffer without requiring any internet connection.",
      telemetry: "FAT32 CSV Log | Auto-Flush on Trip | 100% Offline Resilience",
      color: "border-purple-500/40 text-purple-300"
    },
    {
      id: 7,
      name: "DASHBOARD / ALERT",
      badge: "TELEMETRY & HUD",
      role: "LoRa SX1278 + OLED + Buzzer",
      details: "Transmits structured telemetry packets over 433MHz LoRa link and updates field dashboard, while local OLED displays real-time Ladakh vitals.",
      telemetry: "LoRa SX1278 @ 433MHz | OLED SSD1306 | 90dB Buzzer",
      color: "border-blue-500/40 text-blue-300"
    }
  ];

  return (
    <section id="architecture" className="py-24 relative border-t border-slate-800 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-ice-400/30 bg-ice-500/10 text-[11px] font-mono text-ice-300 uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Operational Data Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            HOW THE SYSTEM WORKS
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            USRPS operates through an eight-stage deterministic data and protection pipeline. Raw environmental stress is captured, evaluated by the primary controller, and turned into microsecond protection actuation and persistent logging.
          </p>
        </div>

        {/* Primary Controller vs Secondary Subsystem Callout */}
        <div className="mb-12 p-5 rounded-xl tech-panel border-cyan-500/30 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="p-4 rounded-lg bg-navy-950/80 border border-cyan-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white uppercase">PRIMARY CONTROLLER: STM32 BLACK PILL</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Acts as the central processing unit and safety-critical master core. It directly acquires sensor data, runs deterministic threshold equations, regulates closed-loop heating, and triggers hardware protection circuits without operating system latency.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-navy-950/80 border border-ice-400/20">
            <div className="flex items-center gap-2 mb-2">
              <Radio className="w-4 h-4 text-ice-300" />
              <span className="text-xs font-mono font-bold text-white uppercase">COMMUNICATION LINK: LORA SX1278</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Long-range Sub-GHz transceiver providing 5km to 15km telemetry penetration across mountainous valleys, broadcasting health beacons and emergency status alerts even under complete cellular blackout.
            </p>
          </div>
        </div>

        {/* Interactive Horizontal / Vertical Pipeline Stepper */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
            <span>CLICK ANY STAGE TO INSPECT EMBEDDED MECHANISM:</span>
            <span className="text-cyan-400">STAGE {activeStep + 1} OF 8 SELECTED</span>
          </div>

          {/* Stepper Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {flowSteps.map((step) => {
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3 rounded text-left transition-all relative ${
                    isSelected
                      ? 'bg-navy-800 border-2 border-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'bg-navy-950/80 border border-slate-800 hover:border-slate-700 hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span>0{step.id + 1}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>}
                  </div>
                  <div className="text-xs font-mono font-bold text-white truncate uppercase">
                    {step.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {step.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Dive Inspector */}
        <div className="p-6 sm:p-8 rounded-xl tech-panel border-cyan-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase font-bold">
                STAGE 0{flowSteps[activeStep].id + 1} • {flowSteps[activeStep].badge}
              </span>
              <h3 className="text-xl font-mono font-bold text-white mt-1 uppercase">
                {flowSteps[activeStep].name}: {flowSteps[activeStep].role}
              </h3>
            </div>
            
            <div className="px-3 py-1.5 rounded bg-navy-950 border border-slate-800 font-mono text-xs text-ice-300">
              <span className="text-slate-500">Telemetry: </span>
              {flowSteps[activeStep].telemetry}
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {flowSteps[activeStep].details}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Subzero Hardened Pipeline</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                className="px-3 py-1 rounded bg-navy-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStep === flowSteps.length - 1}
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-3 py-1 rounded bg-navy-800 border border-cyan-500/30 text-cyan-300 hover:bg-navy-700 disabled:opacity-30 disabled:pointer-events-none"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
