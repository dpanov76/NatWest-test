import { CityInfo, Weather } from '../../shared/models/weather.model';

export interface AppStateInterface {
  weather: WeatherState;
}

export interface WeatherState {
  selectedCity: string;
  cities: string[];
  isLoading: boolean;
  weather?: Weather;
  cityInfo?: CityInfo;
  error?: string;
}

export const initialState: WeatherState = {
  cities: ['','Birmingham','Cardiff', 'London'],
  selectedCity: '',
  isLoading: false
};
