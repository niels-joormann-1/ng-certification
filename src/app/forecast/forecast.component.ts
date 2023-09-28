import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  zipcode: string = "";
  forecast: Forecast;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode']
      console.info(this.zipcode);
      this.weatherService.getForecast(this.zipcode).subscribe(response => {
        this.forecast = response;
        this.forecast.list.forEach(weather => { weather.icon = this.weatherService.getIcon(weather.weather[0].description) })
      });
    });

  }

  redirectToHome() {
    this.router.navigate(["/"]);
  }

}
