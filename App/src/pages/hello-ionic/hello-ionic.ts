import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as globals from '../../app/variables'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit
{

  temperatureValue: string;
  humidityValue: string;
  weightValue: string;

  constructor( public http: Http)
  {
    this.temperatureValue = "Temperature in C";
    this.humidityValue = "Temperature in dont know";
    this.weightValue = "Temperature in Pounds";
  }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get(globals.ipServer).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data.json())
      this.temperatureValue = data.json().temperatura
      //this.results = data['results'];
    });
  }

}
