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

export const getCitySuccess = createAction(
  '[App] Get City success',
  props<{ cityInfo: any }>()
);

export const getCityFailure = createAction(
  '[App] Get City failure',
  props<{ error: string }>()
);
