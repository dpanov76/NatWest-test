import { AppStateInterface } from '../state/app.state';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state;

export const selectCities = createSelector(
  selectFeature,
  (state) => state.cities
);
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
//export const selectedCity = (state: AppStateInterface) => state.selectedCity;
