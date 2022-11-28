import { NgModule } from '@angular/core';
import { reducers } from './store/reducers/app.reducers';
import { StoreModule } from '@ngrx/store';
import { ItemComponent } from './shared/components/list/item/item.component';
import { ItemsComponent } from './shared/components/list/items/items.component';
import { DataService } from './shared/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers: [
    DataService
  ],
  exports: [
    ItemComponent,
    ItemsComponent
  ]
})
export class WeatherModule { }
