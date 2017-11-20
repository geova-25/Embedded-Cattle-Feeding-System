import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
    this.http.get('http://localhost:10000/variables/').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data.json())
      //this.results = data['results'];
    });
  }

}
