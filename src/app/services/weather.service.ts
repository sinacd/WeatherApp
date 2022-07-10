

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) {

  }
getweatherdata(CityName:string): Observable<WeatherData> {
return this.http.get<WeatherData>(environment.WeatherUrl,{
  headers:new HttpHeaders()
  .set(environment.XRapidAPIKey,environment.XRapidAPIKeyValue)
  .set(environment.XRapidAPIHost,environment.XRapidAPIHostValue),
  params:new HttpParams()
  .set('q',CityName)
  .set('units','metric')
  .set('mode','json')
})
}




}
