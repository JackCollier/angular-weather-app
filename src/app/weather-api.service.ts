import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  apiKey: string = 'fc622560fb795dfd8f863f3fab720e48';
  apiPath: string = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=`;

  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    return this.http.get(this.apiPath + location);
  }
}
