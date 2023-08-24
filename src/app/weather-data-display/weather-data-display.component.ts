import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-data-display',
  templateUrl: './weather-data-display.component.html',
  styleUrls: ['./weather-data-display.component.css'],
})
export class WeatherDataDisplayComponent {
  @Input() inputData: any;
}
