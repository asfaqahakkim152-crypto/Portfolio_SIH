import {
  TeamMember,
  HardwareComponent,
  AdaptiveRule,
  ResearchReference,
  TimelineMilestone
} from '../types';

export const PROJECT_METADATA = {
  teamName: "HYROX",
  problemStatementId: "SIH26049",
  problemStatement: "Modifications to improve the reliability, efficiency and lifespan of electrical and electronic equipment and systems in the ambient condition of subzero temperature and low pressure of High Altitude Areas (HAA) and Super High Altitude Areas (SHAA) of Ladakh region.",
  projectName: "Universal Smart Reliability & Protection System (USRPS)",
  systemCode: "LADAKH-SHIELD",
  theme: "Smart Automation",
  psCategory: "Hardware",
  deviceDesignation: "USRPS-CORE-V2.3",
  primaryController: "STM32 Black Pill (ARM Cortex-M4 @ 100MHz)",
  secondaryNode: "Sub-GHz RF Node (LoRa SX1278 @ 433MHz)",
  deploymentRegion: "Ladakh High Altitude Areas (HAA / SHAA)",
  altitudeRange: "3,000 m – 6,000 m+ AMSL",
  tempRange: "-40°C to +45°C",
  pressureRange: "45 kPa to 105 kPa",
  defaultDashboardUrl: "https://ladakh-shield-usrps.vercel.app/",
  defaultDemoUrl: "https://youtu.be/o6jIPG3IPlw?si=Qh_iY24N53vvBast",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "asfaq",
    name: "ASFAQ A HAKKIM",
    role: "Project Coordinator",
    responsibility: "Overall planning, system integration roadmap, technical documentation, and SIH jury presentation coordination.",
    linkedinUrl: "https://www.linkedin.com/in/asfaq-a-hakkim",
    callsign: "HYROX-LEAD",
    department: "Systems Engineering",
  },
  {
    id: "keerthivarman",
    name: "KEERTHIVARMAN S",
    role: "Software & Dashboard Developer",
    responsibility: "Develops the high-altitude monitoring telemetry dashboard, real-time data visualization stream, and responsive operator UI.",
    linkedinUrl: "https://www.linkedin.com/in/keerthivarman050907",
    callsign: "HYROX-SOFT",
    department: "Software & Telemetry",
  },
  {
    id: "balamarish",
    name: "BALAMARISH",
    role: "Mechanical & CAD Designer",
    responsibility: "Designs ruggedized IP67 enclosure, integrated heater ducting, thermal insulation barriers, and mechanical CAD vibration damping.",
    linkedinUrl: "https://www.linkedin.com/in/balamarish-r-446b0a386",
    callsign: "HYROX-MECH",
    department: "Mechanical & Thermal CAD",
  },
  {
    id: "dharanikkarasi",
    name: "DHARANIKKARASI P",
    role: "Testing & Validation Engineer",
    responsibility: "Performs rigorous environmental chamber validation, subzero stress analysis, failure mode evaluation, and power cycle verification.",
    linkedinUrl: "https://www.linkedin.com/in/dharanikkarasi-p",
    callsign: "HYROX-TEST",
    department: "Validation & QA",
  },
  {
    id: "lekha",
    name: "LEKHA UMAMAHESWARI S",
    role: "Hardware & Circuit Designer",
    responsibility: "Engineers sensor conditioning circuits, low-loss MOSFET power switching, dielectric insulation safety, and hardware PCB layout.",
    linkedinUrl: "https://www.linkedin.com/in/lekha-umamaheswari-s-322304358",
    callsign: "HYROX-CIRC",
    department: "Hardware & Power Electronics",
  },
  {
    id: "nivya",
    name: "NIVYA S K",
    role: "Embedded Systems Developer",
    responsibility: "Programs low-level STM32 Bare-Metal/FreeRTOS firmware, sensor drivers (I2C/SPI), adaptive protection rule engine, and LoRa packet framing.",
    linkedinUrl: "https://www.linkedin.com/in/nivya-sk-11a361427",
    callsign: "HYROX-EMBED",
    department: "Firmware & Embedded Systems",
  },
  {
    id: "muthusamy",
    name: "MUTHUSAMY K",
    role: "Project Mentor",
    responsibility: "Provides strategic technical guidance, domain expertise in high-altitude electronics, system verification strategy, and SIH 2026 project advisory.",
    linkedinUrl: "https://www.linkedin.com/in/muthusamy-k-a7ba161b6",
    callsign: "HYROX-MENTOR",
    department: "Project Mentorship & Advisory",
  },
];

export const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    id: "stm32",
    name: "STM32 Black Pill (STM32F411CEU6)",
    category: "controller",
    role: "Primary Embedded Controller and Central Processing Unit",
    inputOutput: "32-bit ARM Cortex-M4 @ 100MHz / 512KB Flash / 128KB SRAM / Hardware FPU. Multiple I2C, SPI, UART, PWM, and DMA channels.",
    whyRequired: "Provides deterministic, hard real-time execution of adaptive safety algorithms, continuous sensor polling, and instant fault trip response without OS latency.",
    usrpsConnection: "Forms the master compute core: gathers all sensor inputs via isolated I2C bus, executes threshold checking every 50ms, and directly drives MOSFET protection and heater gates.",
    specs: ["ARM Cortex-M4 with FPU", "Clock: up to 100 MHz", "Deterministic interrupt latency < 12 cycles", "Operating Temp: -40°C to +85°C rated"],
    imageUrl: "/assets/components/sensor-module.png"
  },
  {
    id: "bme280",
    name: "BME280 Precision Environmental Sensor",
    category: "sensor",
    role: "Atmospheric Temperature, Barometric Pressure & Relative Humidity Monitoring",
    inputOutput: "Digital I2C / SPI interface. Operating range: -40°C to +85°C, 300 to 1100 hPa (equiv. up to 9,000m altitude), 0 to 100% RH.",
    whyRequired: "Super High Altitude Areas in Ladakh experience air pressure drops below 55 kPa and temperatures dropping below -30°C. Accurate pressure is critical to predict Paschen dielectric breakdown, and temperature dictates battery heating.",
    usrpsConnection: "Mounted with direct exposure to ambient atmosphere while shielded from solar heating; communicates via primary I2C bus to STM32 at 10Hz.",
    specs: ["Pressure accuracy: ±1 hPa", "Temperature accuracy: ±0.5°C", "Response time: 1.0s", "Low power consumption: 3.6 µA @ 1Hz"],
    imageUrl: "/assets/components/temp-sensor.jpeg"
  },
  {
    id: "ina219",
    name: "INA219 / INA226 High-Side Power Monitor",
    category: "sensor",
    role: "Bi-directional Bus Voltage, Shunt Current & Power Consumption Sensing",
    inputOutput: "I2C interface, 0V to 26V (INA219) / 36V (INA226) bus range, programmable calibration with 0.1% max accuracy.",
    whyRequired: "Subzero temperatures cause battery internal resistance (ESR) to spike, dropping output voltage under surge load. Early detection of voltage sag and parasitic overcurrent prevents catastrophic power drops in UAVs and radios.",
    usrpsConnection: "Inserted in series between main power bus / battery and modular equipment output; reports voltage sag and instantaneous current draw to STM32.",
    specs: ["12-bit ADC with programmable averaging", "Shunt voltage range: ±320mV", "Max continuous current: up to 10A (scalable)", "High-speed fault trip flag pin"],
    imageUrl: "/assets/components/ina219.png"
  },
  {
    id: "oled",
    name: "0.96-inch OLED I2C Display (SSD1306)",
    category: "display",
    role: "Real-Time Local System Diagnostics and Field Status Display",
    inputOutput: "128x64 monochrome pixels, I2C interface (address 0x3C), wide viewing angle > 160°.",
    whyRequired: "Field personnel in Ladakh need instant on-site visibility of system health, temperature, battery percentage, and active protection states even without laptop or wireless network connectivity.",
    usrpsConnection: "Driven directly by STM32 secondary I2C port; displays real-time Ladakh environmental readings, active heater duty cycle, and error codes.",
    specs: ["Ultra-low power emissive display", "Wide thermal contrast retention", "128x64 crisp graphical HUD", "No backlight required (ideal for cold)"],
    imageUrl: "/assets/components/rc-mechanism.png"
  },
  {
    id: "mosfet",
    name: "High-Current N/P-MOSFET Protection Module",
    category: "actuator",
    role: "Solid-State Electronic Power Switching and Fault Isolation",
    inputOutput: "Logic-level gate drive (3.3V/5V compatible), up to 30V/30A switching with ultra-low R_DS(on) (<5mΩ) to minimize thermal loss.",
    whyRequired: "Mechanical relays freeze, fail, or chatter at -30°C. Solid-state MOSFETs provide sub-microsecond disconnection in case of short circuit, dielectric arcing, or severe battery undervoltage.",
    usrpsConnection: "Controlled via dedicated STM32 hardware timer PWM / GPIO; isolates faulty equipment loads instantly while maintaining power to the USRPS core.",
    specs: ["Switching time < 2 µs", "Ultra-low R_DS(on) prevents self-heating", "No moving parts; immune to freezing and shock", "Bidirectional transient voltage suppression"],
    imageUrl: "/assets/components/eg-unit.png"
  },
  {
    id: "heater",
    name: "PTC Ceramic / Flexible Silicone Heater Pad",
    category: "actuator",
    role: "Controlled Closed-Loop Heating Under Extreme Subzero Conditions",
    inputOutput: "12V DC input, 10W–25W proportional heating, insulated silicone-embedded nickel-chromium element.",
    whyRequired: "Lithium-ion cells permanently lose usable capacity and risk metallic lithium plating when discharged or charged below 0°C. Controlled pre-heating keeps cells and critical electronics in safe operational envelope.",
    usrpsConnection: "Thermally coupled to battery compartment and sensor chamber; modulated by STM32 closed-loop PID controller based on BME280 / internal thermistor readings.",
    specs: ["Closed-loop PID thermal regulation", "Target setpoint: +5°C to +15°C internal core", "Flexible form-factor adheres to battery walls", "Over-temperature thermal fuse backup (65°C)"],
    imageUrl: "/assets/components/temp-sensor.jpeg"
  },
  {
    id: "sdcard",
    name: "SPI MicroSD Card Logging Module",
    category: "storage",
    role: "Offline-First Black-Box Telemetry & Fault History Storage",
    inputOutput: "High-speed SPI bus (up to 18MHz clock), FAT32 filesystem support, 16GB/32GB industrial SLC/pSLC grade.",
    whyRequired: "Himalayan mountain valleys have severe RF shadowing and erratic network coverage. Every environmental cycle, arcing spike, and protection event must be persistently stored locally without data loss.",
    usrpsConnection: "Directly wired to STM32 SPI port; writes circular CSV audit logs with millisecond timestamps every 1 second, with automatic flush on warning states.",
    specs: ["Industrial grade wide-temp flash", "Continuous circular buffer logging", "Auto-flush on fault trip", "Zero reliance on external network"],
    imageUrl: "/assets/components/sensor-module.png"
  },
  {
    id: "lora",
    name: "LoRa SX1278 Sub-GHz Transceiver (433MHz)",
    category: "communication",
    role: "Long-Range, Low-Power Non-Line-of-Sight Telemetry Link",
    inputOutput: "SPI interface to controller, +20 dBm output power, receiver sensitivity down to -148 dBm.",
    whyRequired: "Provides 5km to 15km telemetry link across rugged mountain ridges where cellular signals do not penetrate, ensuring remote base stations receive alerts.",
    usrpsConnection: "Interfaced directly to STM32 via SPI; transmits compressed telemetry beacons and priority emergency alerts when cellular connectivity drops.",
    specs: ["Spread spectrum modulation", "Up to 15 km Line-of-Sight range", "Deep RF penetration in valley terrain", "Operates reliably under RF interference"],
    imageUrl: "/assets/components/sensor-module.png"
  },
  {
    id: "uvsensor",
    name: "GUVA-S12SD UV / Ambient Radiation Sensor",
    category: "sensor",
    role: "Solar UV Index and High-Altitude Radiation Flux Monitoring",
    inputOutput: "Analog output (0V to 1V calibrated to UV index 0–10), spectral detection 240nm–370nm.",
    whyRequired: "At 4,500m+ in Ladakh, thin atmosphere causes UV radiation to increase by 40-50% compared to sea level, accelerating polymer insulation embrittlement and optical sensor degradation.",
    usrpsConnection: "Analog output connected to high-precision 12-bit ADC channel of STM32; measures UV index and ambient solar exposure intensity.",
    specs: ["Fast response time < 0.5s", "Direct UV Index calibration", "Wide angle optical aperture", "Assists predictive insulation wear calculation"],
    imageUrl: "/assets/components/temp-sensor.jpeg"
  },
  {
    id: "buzzer_led",
    name: "Piezo Buzzer & High-Visibility Tri-Color LED",
    category: "actuator",
    role: "Immediate On-Site Audible and Visual Operator Warnings",
    inputOutput: "90dB piezoelectric transducer, high-luminosity RGB LED driven via current-limiting resistors from STM32 GPIO.",
    whyRequired: "Alerts field operators wearing heavy subzero gloves and goggles immediately if a critical battery drop, arcing trip, or thermal limit occurs.",
    usrpsConnection: "Triggered instantly by STM32 hardware interrupts on fault detection (Green = Normal, Amber = Protected/Heating, Red = Fault Trip).",
    specs: ["90 dB at 10 cm audible alarm", "High-visibility wide-angle LED indicators", "Pulsed alarm patterns for specific fault codes", "Instant hardware response < 1ms"],
    imageUrl: "/assets/components/rc-mechanism.png"
  },
  {
    id: "power_supply",
    name: "High-Discharge LiFePO4 / LTO Battery System",
    category: "power",
    role: "Low-Temperature Resistant System & Actuator Power Reservoir",
    inputOutput: "12.8V nominal pack with high-rate discharge capability, integrated BMS, and low-temperature cold start tolerance.",
    whyRequired: "Standard consumer Li-ion fails below -10°C due to electrolyte freezing. A specialized cold-tolerant cell architecture powers the USRPS control core, sensors, and heater pad reliably.",
    usrpsConnection: "Supplies main DC power rail to USRPS buck-boost regulation circuits; monitored continuously by INA219 for state-of-charge and health.",
    specs: ["12.8V / 10Ah subzero chemistry", "Wide operating envelope: -30°C to +55°C", "Integrated low-temperature BMS protection", "Stable discharge plateau"],
    imageUrl: "/assets/components/ina219.png"
  }
];

export const ADAPTIVE_RULES: AdaptiveRule[] = [
  {
    id: "rule_1",
    triggerCondition: "SUBZERO TEMPERATURE (-15°C to -40°C)",
    sensorSource: "BME280 Ambient + Internal NTC Thermistor",
    thresholdValue: "T_amb < 0°C (Pre-heat) | T_amb < -15°C (Full Duty)",
    actionTaken: "Heater Activation via Closed-Loop PWM",
    engineeringRationale: "Lithium battery internal resistance surges below 0°C, causing voltage collapse. Controlled heating elevates cell temperature into the safe 5°C–15°C zone while maintaining thermal insulation envelope.",
    systemImpact: "Prevents battery terminal voltage crash; prevents metallic lithium plating; restores rated flight time for drones.",
    iconName: "ThermometerSnowflake",
    severity: "high"
  },
  {
    id: "rule_2",
    triggerCondition: "LOW ATMOSPHERIC PRESSURE (< 60 kPa / High Altitude)",
    sensorSource: "BME280 Barometric Sensor (< 600 hPa)",
    thresholdValue: "P_amb < 55 kPa (equiv. > 4,800m altitude)",
    actionTaken: "Insulation Monitoring & Arcing Suppression Protocol",
    engineeringRationale: "According to Paschen's Law, breakdown voltage between electrical conductors drops significantly at reduced air density. High voltage spikes trigger destructive flashovers on uninsulated traces.",
    systemImpact: "Limits peak transient switching voltages, throttles high dV/dt PWM edges, activates conformal dielectric status checks.",
    iconName: "ZapOff",
    severity: "critical"
  },
  {
    id: "rule_3",
    triggerCondition: "BATTERY CAPACITY DEGRADATION / VOLTAGE SAG",
    sensorSource: "INA219 / INA226 Voltage & Current Bus Monitor",
    thresholdValue: "V_bus < 10.8V under load OR dV/dt > 0.5V/s sag",
    actionTaken: "Battery Health Monitoring & Adaptive Power Optimization",
    engineeringRationale: "Cold-induced impedance spikes cause severe voltage drop under motor or transmitter peak loads, threatening sudden brownout reboot of flight controllers or radios.",
    systemImpact: "Prioritizes critical computing bus; sheds auxiliary non-essential power rails; signals operator with safe return/land warning.",
    iconName: "BatteryWarning",
    severity: "high"
  },
  {
    id: "rule_4",
    triggerCondition: "THERMAL SHOCK & CYCLING STRESS",
    sensorSource: "Multi-point differential thermistors (Core vs Exterior)",
    thresholdValue: "ΔT > 25°C differential OR rate of change > 3°C/min",
    actionTaken: "Controlled Gradient Thermal Buffer Stabilization",
    engineeringRationale: "Rapid temperature transitions between warm indoor storage and -25°C mountain deployment induce mechanical thermal stress, cracking multilayer ceramic capacitors and BGA solder balls.",
    systemImpact: "Ramps internal heating gradually to minimize thermal shock gradient across PCB ground planes.",
    iconName: "Flame",
    severity: "medium"
  },
  {
    id: "rule_5",
    triggerCondition: "COMMUNICATION LINK FAILURE (Cellular / RF Shadowing)",
    sensorSource: "Network Heartbeat & RF Signal RSSI Monitor",
    thresholdValue: "Packet Ack Timeout > 15s OR RSSI < -95 dBm",
    actionTaken: "Offline SD Card Circular Logging + LoRa Fallback Beacon",
    engineeringRationale: "Himalayan mountainous terrain creates severe line-of-sight signal loss. Autonomous protection must never stall waiting for a cloud connection.",
    systemImpact: "Switches telemetry to SPI local SD card; broadcasts low-bitrate critical telemetry packets via 433MHz LoRa link.",
    iconName: "WifiOff",
    severity: "medium"
  },
  {
    id: "rule_6",
    triggerCondition: "HIGH UV & SOLAR RADIATION EXPOSURE",
    sensorSource: "GUVA-S12SD UV Photodiode",
    thresholdValue: "UV Index > 11 (Extreme Radiation Intensity)",
    actionTaken: "Protective Exposure Logging & Degradation Assessment",
    engineeringRationale: "Extreme high altitude lacks dense ozone layer attenuation. Intense UV accelerates photochemical oxidation of cable jackets, optical sensors, and structural seals.",
    systemImpact: "Logs accumulated UV dosage hours into EEPROM; generates preventative maintenance replacement alert before physical cracking occurs.",
    iconName: "Sun",
    severity: "low"
  }
];

export const RESEARCH_REFERENCES: ResearchReference[] = [
  {
    id: "ref_1",
    title: "Lithium-ion battery powered UAV under extreme temperature conditions",
    source: "Journal of Energy Storage / Aerospace Engineering Systems",
    year: "2021",
    keyTakeaway: "Demonstrated that unheated commercial Li-ion packs lose over 60% of effective discharge capacity at -20°C, and documented severe cell voltage drop under UAV takeoff burst current.",
    url: "https://www.sciencedirect.com/science/article/pii/S2352152X2100892X"
  },
  {
    id: "ref_2",
    title: "Enhancing safety of electric aircraft batteries: degradation and thermal runaway behavior at extreme altitudes",
    source: "IEEE Transactions on Transportation Electrification",
    year: "2023",
    keyTakeaway: "Investigated low-pressure effects (<50 kPa) on battery degassing, thermal dissipation rates in thin atmosphere, and the reduced convective heat transfer efficiency at high altitudes.",
    url: "https://ieeexplore.ieee.org/document/9843210"
  },
  {
    id: "ref_3",
    title: "Analysis and Optimization Techniques for Power Transmission and Transformation Sensors in High-Altitude Environments",
    source: "High Voltage Engineering & IEEE Sensors Journal",
    year: "2022",
    keyTakeaway: "Analyzed Paschen's Law arc inception voltages at 4000m–5500m elevations, validating the necessity of widened trace spacing and conformal dielectric coating for extreme-altitude electronics.",
    url: "https://ieeexplore.ieee.org/document/9451203"
  },
  {
    id: "ref_4",
    title: "HYROX – Universal Smart Reliability and Protection System (USRPS)",
    source: "Smart India Hackathon 2026 Engineering Technical Dossier (SIH26049)",
    year: "2026",
    keyTakeaway: "Proposed the deterministic single-controller architecture (STM32 primary real-time protection core) paired with closed-loop adaptive thermal-electrical protection for Ladakh HAA/SHAA.",
    url: "#concept-prototype"
  }
];

export const PROJECT_TIMELINE: TimelineMilestone[] = [
  {
    step: 1,
    stage: "STAGE 01",
    title: "PROBLEM IDENTIFICATION",
    description: "Detailed analysis of Ladakh HAA/SHAA failure modes: subzero battery capacity collapse, low air pressure dielectric arcing, and thermal cycling in extreme terrain.",
    status: "completed",
    verificationMetric: "Field failure mode matrix and environmental parameter boundary definitions."
  },
  {
    step: 2,
    stage: "STAGE 02",
    title: "SYSTEM DESIGN & ARCHITECTURE",
    description: "Architecting 'One Universal Core + Modular Interfaces': decoupling the deterministic safety core from peripheral equipment adapters.",
    status: "completed",
    verificationMetric: "Hardware block diagram, bus routing, and fail-safe state machine specifications."
  },
  {
    step: 3,
    stage: "STAGE 03",
    title: "HARDWARE SELECTION",
    description: "Component qualification for subzero temperature (-40°C) and wide-pressure ranges: STM32 Black Pill Cortex-M4, BME280, INA219, and solid-state MOSFETs.",
    status: "completed",
    verificationMetric: "BOM component thermal and electrical tolerance verification."
  },
  {
    step: 4,
    stage: "STAGE 04",
    title: "PROTOTYPE DEVELOPMENT",
    description: "Breadboard and initial PCB assembly of LADAKH-SHIELD control core, power bus conditioning, and modular terminal blocks.",
    status: "completed",
    verificationMetric: "Electrical continuity, voltage regulation stability, and power consumption bench tests."
  },
  {
    step: 5,
    stage: "STAGE 05",
    title: "SENSOR INTEGRATION",
    description: "Interfacing BME280 (Temp/Pressure/Humidity), INA219 (Voltage/Current), and UV photodiode over isolated I2C and analog ADC channels.",
    status: "completed",
    verificationMetric: "Multi-sensor sampling rate at 10Hz with CRC error checking and calibration offsets."
  },
  {
    step: 6,
    stage: "STAGE 06",
    title: "PROTECTION LOGIC & FIRMWARE",
    description: "Implementation of deterministic threshold evaluation, closed-loop PID heater regulation, and sub-microsecond MOSFET fault isolation routines.",
    status: "completed",
    verificationMetric: "Hard real-time interrupt response verified under simulated fault injection."
  },
  {
    step: 7,
    stage: "STAGE 07",
    title: "MONITORING DASHBOARD & TELEMETRY",
    description: "Building the real-time telemetry streaming bridge, cloud/local synchronization, alert notification center, and interactive operator HUD.",
    status: "completed",
    verificationMetric: "Telemetry streaming with packet loss < 0.5% and round-trip latency < 150ms."
  },
  {
    step: 8,
    stage: "STAGE 08",
    title: "TESTING & VALIDATION",
    description: "Subzero thermal bench validation down to -25°C, simulated load switching on UAV drone and tactical radio loads, and offline data logging verification.",
    status: "completed",
    verificationMetric: "Continuous 24-hour operation test with automatic heater cycling and zero brownout resets."
  },
  {
    step: 9,
    stage: "STAGE 09",
    title: "SIH DEMONSTRATION & FIELD READINESS",
    description: "Comprehensive live demonstration for Smart India Hackathon jury, validation dossier, and roadmap toward military/field qualification.",
    status: "in-progress",
    verificationMetric: "Jury presentation, interactive live dashboard validation, and video proof of execution."
  }
];
