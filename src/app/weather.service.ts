import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  locationEndpoint = `http://api.openweathermap.org/geo/1.0/zip` //?zip=95742,US&appid=5a4b2d457ecbef9eb2a71e480b947604`;
  appId = `5a4b2d457ecbef9eb2a71e480b947604`;

  getWeatherReport(zipcode: string) {
    console.info(`getWeatherReport for ${zipcode}`);
    var location = this.getLocation(zipcode)
  }

  private getLocation(zipcode: string) {
    this.httpClient.get<Location>(this.locationEndpoint, { params: new HttpParams().set('zip', `${zipcode},US`).set('appid', this.appId) })
      .pipe(
        map(response => {
          console.info(response);
          return (response as Location)
        })
      )
      .subscribe(response => {

      })
  }
}
