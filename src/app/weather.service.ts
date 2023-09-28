import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Weather } from './weatherinfo.model';
import { Forecast } from './forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  appId = `5a4b2d457ecbef9eb2a71e480b947604`;

  weatherEndpoint = `http://api.openweathermap.org/data/2.5/weather`; //?zip=95742,US&appid=5a4b2d457ecbef9eb2a71e480b947604`;
  forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast`; //https://api.openweathermap.org/data/2.5/forecast?zip=20500&appid=5a4b2d457ecbef9eb2a71e480b947604
  iconEndpoint = "https://www.angulartraining.com/images/weather";

  getWeatherReport(zipcode: string): Observable<Weather> {
    //console.info(`getWeatherReport for ${zipcode}`);
    return this.httpClient
      .get(this.weatherEndpoint,
        {
          params: new HttpParams()
            .set('zip', `${zipcode},US`)
            .set('appid', this.appId)
        }).pipe(
          map((response) => {
            //console.info(response);
            return response as Weather;
          }));
  }

  getForecast(zipcode: string): Observable<Forecast> {
    console.info(zipcode);
    return this.httpClient
      .get(this.forecastEndpoint,
        {
          params: new HttpParams()
            .set('zip', zipcode)
            .set('appid', this.appId)
        }).pipe(
          map((response) => {
            console.info(response);
            return response as Forecast;
          }));
  }

  getIcon(description: string) {
    switch (description) {
      case 'clouds':
      case 'fog':
      case 'overcast clouds':
      case 'scattered clouds':
      case 'few clouds':
      case 'broken clouds':
        return `${this.iconEndpoint}/clouds.png`;
      case 'rain':
      case 'light rain':
        return `${this.iconEndpoint}/rain.png`;
      case 'snow':
        return `${this.iconEndpoint}/snow.png`;
      case 'clear sky':
      case 'sun':
        return `${this.iconEndpoint}/sun.png`;
      default:
        return 'unknown';
    }
  }
}
