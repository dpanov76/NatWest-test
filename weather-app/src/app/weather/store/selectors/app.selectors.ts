import {WeatherState} from '../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectFeature = createFeatureSelector<WeatherState>('weather');

export const Cities = createSelector(
  selectFeature,
  (state) => state.cities
);
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const selectedCity = createSelector(
  selectFeature,
  (state) => state.selectedCity
);
export const CityInfo = createSelector(
  selectFeature,
  (state) => state.cityInfo
);
export const Weather = createSelector(
  selectFeature,
  (state) => state.weather
);
export const Error = createSelector(
  selectFeature,
  (state) => state.error
);
