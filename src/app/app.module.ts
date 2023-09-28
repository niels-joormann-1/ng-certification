import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeFormComponent } from './zipcode-form/zipcode-form.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, AppRoutingModule, NgbModule],
  declarations: [AppComponent, ZipcodeFormComponent, WeatherReportComponent, ForecastComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
