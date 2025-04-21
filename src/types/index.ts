export interface SectionProps {
  isVisible?: boolean;
  count?: CountProps;
}

export interface IntersectionProps {
  services: boolean;
  process: boolean;
  results: boolean;
  contact: boolean;
}

export interface CountProps {
  efficiency: number;
  revenue: number;
  downtime: number;
  savings: number;
}
