import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  @Input() zipcode: string;
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit()
  {
    console.info('init');
    this.weatherService.getWeatherReport(this.zipcode);
  }

}
