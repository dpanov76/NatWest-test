export interface Weather {
  date: Date;
  temperature: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export interface CityInfo {
  lon: number;
  lat: number;
}
