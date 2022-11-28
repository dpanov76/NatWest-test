import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AppActions from '../actions/app.actions';
import {catchError, map, mergeMap, of} from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class WeatherEffects {

  //TODO Hardcoded :AT and LON to replace from below request
  getWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getCitySuccess),
      mergeMap((coordinates) => {
        return this.dataService
          .getData(environment.weatherApiURL,{ lat:coordinates.cityInfo[0].lat, lon:coordinates.cityInfo[0].lon, units:'metric' })
          .pipe(map((weather) => AppActions.getWeatherSuccess({ weather })),
            catchError((error) =>
              of(AppActions.getWeatherFailure({ error: error.message }))
            )
          );
      })
    )
  );

  getCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.selectCity),
      mergeMap((selected) => {
      return this.dataService
        .getData(environment.cityApiURL,{ q:selected.city, limit:1 })
        .pipe(map((cityInfo) => AppActions.getCitySuccess({ cityInfo })),
          catchError((error) =>
            of(AppActions.getCityFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
