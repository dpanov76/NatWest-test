import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../../models/weather.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any = {};
  weather: Weather;
  constructor() {
    this.weather = {
      temperature: 0,
      windSpeed: 0,
      description: '',
      date: new Date(),
      icon: ''
    }
  }

  ngOnInit(){
    this.weather.temperature = this.item.main.temp;
    this.weather.windSpeed = this.item.wind.speed;
    this.weather.description = `${this.item.weather[0].main}, ${this.item.weather[0].description}`;
    this.weather.icon = `http://openweathermap.org/img/wn/${this.item.weather[0].icon}@2x.png`;
    const arr = this.item.dt_txt.split(/-|\s|:/);
    this.weather.date = new Date(arr[0], arr[1] -1, arr[2], arr[3], arr[4], arr[5]);
  }
}
