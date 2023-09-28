import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weatherinfo.model';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class WeatherReportComponent implements OnInit {

  @Input() zipcode: string = "";

  constructor(
    private weatherService: WeatherService,
    private zipcodeService: ZipcodeService
  ) { }

  weather: Weather;

  ngOnInit() {
    //console.info('init');
    this.weatherService.getWeatherReport(this.zipcode).subscribe(response => {
      this.weather = response;
      this.weather.icon = this.weatherService.getIcon(this.weather.weather[0].description);
      //console.info(this.weather)
    });
  }

  deleteZipcode() {
    this.zipcodeService.deleteZipcode(this.zipcode);
  }

}
