import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  tempMax : any = [];
  tempMin : any = [];
  windSpeed : any = [];
  weatherForecast : any = [];
  weatherForecastIcon : any = [];
  time : any = [];

  selectedIndex : number = 0;
  firstDaySelected : boolean = false;

  constructor(private forecastService: ForecastService) { }

  //retrieving data from api
  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
      pluck('daily')
    ).subscribe(apiData=>{
      this.getDailyForecast(apiData)
    })
  }

  getDailyForecast(apiData:any){
    // binding api data to each variable
    for (let i = 1; i < apiData.temperature_2m_max.length && i < 6; i++) {
      this.tempMax.push(apiData.temperature_2m_max[i]);
      this.tempMin.push(apiData.temperature_2m_min[i]);
      this.windSpeed.push(apiData.windspeed_10m_max[i]);
      this.weatherForecastIcon.push(apiData.weathercode[i]);
      this.time.push(apiData.time[i]);

      //assigning image paths to each weatherForecastIcon
      switch (this.weatherForecastIcon[i - 1]) {
        case 0:
          this.weatherForecastIcon[i - 1] = "../../assets/images/sunny_day.png"
          this.weatherForecast[i - 1] = "Sunny";
          break;
        case 1:
        case 2:
        case 3:
          this.weatherForecastIcon[i - 1] = "../../assets/images/cloudy_day.png"
          this.weatherForecast[i - 1] = "Cloudy";

          break;
        case 45:
        case 48:
          this.weatherForecastIcon[i - 1] = "../../assets/images/fog.png"
          this.weatherForecast[i - 1] = "Foggy";
          break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
          this.weatherForecastIcon[i - 1] = "../../assets/images/rainy.png"
          this.weatherForecast[i - 1] = "Rainy";
          break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 80:
        case 81:
        case 82:
        case 85:
        case 86:
          this.weatherForecastIcon[i - 1] = "../../assets/images/snow.png"
          this.weatherForecast[i - 1] = "Snowy";
          break;
        case 95:
        case 96:
        case 99:
          this.weatherForecastIcon[i - 1] = "../../assets/images/storm.png"
          this.weatherForecast[i - 1] = "Thunderstorm";
          break;
        default:
          console.log("error");
          break;
      }

    }
  }

  toggleHighlight(i:number){
    if(i == 9){
      this.firstDaySelected = !this.firstDaySelected;
      this.selectedIndex = i;
    }else if (this.firstDaySelected == true && i != 9) {
      this.firstDaySelected = !this.firstDaySelected;
      this.selectedIndex = i;
    }else{
      this.selectedIndex = i;
    }
  }

}
