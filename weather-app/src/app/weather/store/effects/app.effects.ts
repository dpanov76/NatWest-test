import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AppActions from '../actions/app.actions';
import {mergeMap} from 'rxjs/operators';
import {DataService} from '@shared/services/data.service';
import {environment} from '@environment/environment';

@Injectable()
export class WeatherEffects {
  getWeather$ = createEffect(() =>
    this.actions$.pipe(ofType(AppActions.selectCity), mergeMap(() => {
        return this.dataService
          .getData(environment.apiURL,{ lat:51.5085, lon:-0.1257 })  //TODO Hardcoded :AT and LON to replace from below request
    }))
  );

  //TODO fire API to retrieve City Lat and Lon by CityName
  // getCity$ = createEffect(() =>
  //   this.actions$.pipe(ofType(AppActions.selectCity), mergeMap(() => {
  //     return this.dataService
  //       .getData(environment.apiURL,{ lat:51.5085, lon:-0.1257 })
  //   }))
  // );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
