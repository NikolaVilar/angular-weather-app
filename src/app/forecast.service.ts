import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  //retrieving latitude and longitute from browser
  //then retrieving data form api
  getWeatherForecast(){
    return new Observable((observer)=>{
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          observer.next(position)
        },
        (error)=>{
          observer.next(error)
        }
      )
    }).pipe(
      map((value:any)=>{
        return new HttpParams()
        .set('latitude', value.coords.latitude)
        .set('longitude', value.coords.longitude)
        .set('daily', 'weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max')
        .set('timezone', 'Europe/London')
      }),
      switchMap((values)=>{
        return this.http.get('https://api.open-meteo.com/v1/forecast', { params: values })
      })
    )
  }
}
