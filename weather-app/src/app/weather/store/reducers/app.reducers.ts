import { createReducer, on} from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AppActions from '../actions/app.actions';

export const reducers = createReducer(
  initialState,
  on(AppActions.getCities, (state) => ({
    ...state
  })),
  on(AppActions.selectCity, (state, action) => ({
    ...state,
    selectedCity: action.city,
    isLoading: true,
    error: undefined
  })),
  on(AppActions.getCitySuccess, (state, action) => ({
    ...state,
    isLoading: true,
    cityInfo: action.cityInfo
  })),
  on(AppActions.getCityFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
    weather: undefined
  })),
  on(AppActions.getWeatherSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    weather: action.weather
  })),
  on(AppActions.getWeatherFailure, (state, action) => ({
    ...state, isLoading: false,
    error: action.error
  })),
);
