import {createAction, props} from '@ngrx/store';

export const getCities = createAction(
  '[App] Get Cities'
  );

export const selectCity = createAction(
  '[App] Select City',
  props<{city: string}>());

export const getWeatherSuccess = createAction(
  '[App] Get Weather success',
  props<{ weather: any }>()
  );

export const getWeatherFailure = createAction(
  '[App] Get Weather failure',
  props<{ error: string }>()
  );

