import {Component, OnInit} from '@angular/core';
import { select, Store} from '@ngrx/store';
import * as AppActions from './weather/store/actions/app.actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, Cities, CityInfo, Error, Weather } from './weather/store/selectors/app.selectors';
import { AppStateInterface } from './weather/store/state/app.state';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  isLoading$: Observable<boolean>;
  cities$: Observable<string[]>;
  city$: Observable<any>;
  error$: Observable<string | undefined>;
  weather$: Observable<any>;
  citySelectionForm = new FormGroup({
    cityName: new FormControl()
  });

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.cities$ = this.store.pipe(select(Cities));
    this.city$ = this.store.pipe(select(CityInfo));
    this.weather$ = this.store.pipe(select(Weather));
    this.error$ = this.store.pipe(select(Error));
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getCities());
    if (this.citySelectionForm.get('cityName')) {
      const variable = this.citySelectionForm.get('cityName');
      variable!.valueChanges.subscribe(city => this.onCitySelect(city));
    }
  }

  onCitySelect(city: string) {
    if (city) {
      this.store.dispatch(AppActions.selectCity({city}));
    } else {
      this.store.dispatch(AppActions.getCityFailure({error:'City can not be blank, please select one below'}));
    }
  }

}
