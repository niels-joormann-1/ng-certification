import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZipcodeFormComponent } from './zipcode-form/zipcode-form.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ZipcodeFormComponent, WeatherReportComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
