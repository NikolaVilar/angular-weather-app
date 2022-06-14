import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  //youtube
  timeline : any = [];
  weatherNow : any;
  location : any;

  //me
  latitude : any;
  longitude : any;
  tempMax : any;
  tempMin : any;
  windSpeed : any;
  weatherForecast : any;
  weatherForecastIcon : any;
  time : any;
  currentTime = new Date();
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  constructor(private forecastService: ForecastService) { }

  //retrieving data from api
  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(data=>{
      this.getTodayForecast(data)
    })
  }

  //binding data to variables
  getTodayForecast(apiData:any){
    console.log(apiData);

    this.longitude = apiData.longitude;
    this.latitude = apiData.latitude;
    this.tempMax = apiData.daily.temperature_2m_max[0];
    this.tempMin = apiData.daily.temperature_2m_min[0];
    this.windSpeed = apiData.daily.windspeed_10m_max[0];
    this.time = apiData.daily.time[0];
    this.weatherForecastIcon = apiData.daily.weathercode[0];

    //assigning image path to weatherForecastIcon and description to weatherForecast
    switch (this.weatherForecastIcon) {
      case 0:
        this.weatherForecastIcon = "../../assets/images/sunny.png"
        this.weatherForecast = "Sunny";
        break;
      case 1:
      case 2:
      case 3:
        this.weatherForecastIcon = "../../assets/images/cloudy_day.png"
        this.weatherForecast = "Cloudy";
        break;
      case 45:
      case 48:
        this.weatherForecastIcon = "../../assets/images/fog.png"
        this.weatherForecast = "Foggy";
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
        this.weatherForecastIcon = "../../assets/images/rainy.png"
        this.weatherForecast = "Rainy";
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
        this.weatherForecastIcon = "../../assets/images/snow.png"
        this.weatherForecast = "Snowy";
        break;
      case 95:
      case 96:
      case 99:
        this.weatherForecastIcon = "../../assets/images/storm.png"
        this.weatherForecast = "Thunderstorm";
        break;
      default:
        console.log("nothing");
        break;
    }
  }

}
