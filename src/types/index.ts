export interface TeamMember {
  id: string;
  name: string;
  role: string;
  responsibility: string;
  linkedinUrl: string;
  avatarUrl?: string;
  callsign: string;
  department: string;
}

export interface HardwareComponent {
  id: string;
  name: string;
  category: 'controller' | 'sensor' | 'actuator' | 'storage' | 'communication' | 'power' | 'display';
  role: string;
  inputOutput: string;
  whyRequired: string;
  usrpsConnection: string;
  specs: string[];
  imageUrl?: string;
}

export interface AdaptiveRule {
  id: string;
  triggerCondition: string;
  sensorSource: string;
  thresholdValue: string;
  actionTaken: string;
  engineeringRationale: string;
  systemImpact: string;
  iconName: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface ResearchReference {
  id: string;
  title: string;
  source: string;
  year?: string;
  keyTakeaway: string;
  url: string;
}

export interface TimelineMilestone {
  step: number;
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  verificationMetric: string;
}

export interface TelemetryReading {
  temperature: number; // °C
  pressure: number;    // kPa
  humidity: number;    // %
  batteryVoltage: number; // V
  batteryCurrent: number; // A
  powerConsumption: number; // W
  batteryHealth: number; // %
  radiationLevel: number; // µSv/h
  loraSignal: number;   // dBm
  systemStatus: 'OPERATIONAL' | 'PROTECTIVE_MODE' | 'THERMAL_INTERVENTION' | 'ARC_SUPPRESSION';
  activeProtection: string[];
}
