import { createReducer, on} from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AppActions from '../actions/app.actions';

export const reducers = createReducer(
  initialState,
  on(AppActions.getCities, (state) => ({...state, isLoading: true})),
  on(AppActions.getWeatherSuccess, (state) => ({...state, isLoading: false})),
  on(AppActions.getWeatherFailure, (state) => ({...state, isLoading: false}))
);
