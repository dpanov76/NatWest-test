
export interface AppStateInterface {
  selectedCity: string;
  cities: string[];
  isLoading: boolean;
}

export const initialState: AppStateInterface = {
  cities: ['Birmingham','Cardiff', 'London'],
  selectedCity: '',
  isLoading: false
};
