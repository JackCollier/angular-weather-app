import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherDataDisplayComponent } from './weather-data-display/weather-data-display.component';

@NgModule({
  declarations: [AppComponent, WeatherSearchComponent, WeatherDataDisplayComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
