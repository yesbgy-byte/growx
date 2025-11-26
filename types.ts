export interface Metric {
  subject: string;
  A: number; // Pre-assessment
  B: number; // Post-assessment
  fullMark: number;
}

export interface CurriculumTrack {
  id: string;
  role: string;
  description: string;
  modules: string[];
  tools: string[];
}

export interface StatData {
  name: string;
  value: number;
  color: string;
}