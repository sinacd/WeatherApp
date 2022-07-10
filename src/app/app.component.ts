import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherservice: WeatherService) {

  }
  weatherdata?: WeatherData;
  city:string = 'russia' ;


  ngOnInit(): void {
    this.searchweather(this.city);
    this.city='';
    }
    private searchweather(city:string)
    {
      this.weatherservice.getweatherdata(city)
      .subscribe({
  
        next:(response) =>{
          this.weatherdata = response;
          console.log(response);
        } 
      });
    }
    onsubmit() {
      this.searchweather(this.city);
      this.city='';
    }










}
