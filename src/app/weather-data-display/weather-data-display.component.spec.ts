import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataDisplayComponent } from './weather-data-display.component';

describe('WeatherDataDisplayComponent', () => {
  let component: WeatherDataDisplayComponent;
  let fixture: ComponentFixture<WeatherDataDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDataDisplayComponent]
    });
    fixture = TestBed.createComponent(WeatherDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
