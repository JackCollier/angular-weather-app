import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
})
export class WeatherSearchComponent {
  weatherData: any;

  constructor(private weatherApiService: WeatherApiService) {}

  userInputLocationForm = new FormGroup({
    location: new FormControl(''),
  });

  submitLocationSearch() {
    const newLocation = {
      location: this.userInputLocationForm.value.location ?? '',
    };

    this.weatherApiService
      .getWeather(newLocation.location)
      .subscribe((returnData) => (this.weatherData = returnData));
  }
}
