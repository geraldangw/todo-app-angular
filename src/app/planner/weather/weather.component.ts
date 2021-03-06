import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'ga-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
})
export class WeatherComponent implements OnInit {
  //passing properties to connect with API properties
    country: string;
    temperature: string;
    maxtemp: string;
    mintemp: string;
    forecast: string;
    updated: string;

  //constructing as http as this is a http call
constructor(public http: Http) { this.http = http; }

  //calling api and connecting to properties of this class
  makeRequest(): void {
    this.http.request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22singapore%2Csg%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    .subscribe((res: Response) => {
            this.country = res.json().query.results.channel.location.city.toUpperCase();
            this.temperature = res.json().query.results.channel.item.condition.temp;
            this.forecast = res.json().query.results.channel.item.condition.text.toUpperCase();
            this.mintemp = res.json().query.results.channel.item.forecast[0].low;
            this.maxtemp = res.json().query.results.channel.item.forecast[0].high;
            this.updated = new Date().toDateString();
          });
  }

  //run api call before load
  ngOnInit() {
    this.makeRequest();
  }

}


