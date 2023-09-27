import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, Observable, of } from 'rxjs';
import {Location} from '../app/location.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  locationEndpoint = `http://api.openweathermap.org/geo/1.0/zip` //?zip=95742,US&appid=5a4b2d457ecbef9eb2a71e480b947604`;
  weatherEndpoint = `https://api.openweathermap.org/data/3.0/onecall`
  appId = `5a4b2d457ecbef9eb2a71e480b947604`;

  getWeatherReport(zipcode: string) {
    console.info(`getWeatherReport for ${zipcode}`);
    var location = this.getLocation(zipcode);
    var result = this.httpClient.get(this.weatherEndpoint, {
      params: new HttpParams()
        .set('lat', location.lat)
        .set('lon', location.lon)
        .set('appid', this.appId)
    }).subscribe(response => { return response; })
  }

  private getLocation(zipcode: string): Location{
    this.httpClient.get<Location>(this.locationEndpoint, { params: new HttpParams().set('zip', `${zipcode},US`).set('appid', this.appId) })
      .pipe(
        map(response => {
          console.info(response);
          return (response as Location)
        })
      )
      .subscribe(location => {
        return location;
    })
  }
}
