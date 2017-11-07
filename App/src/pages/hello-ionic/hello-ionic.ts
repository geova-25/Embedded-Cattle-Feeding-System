import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage
{

  temperatureValue: string;
  humidityValue: string;
  weightValue: string;

  constructor()
  {
    this.temperatureValue = "Temperature in C";
    this.humidityValue = "Temperature in dont know";
    this.weightValue = "Temperature in Pounds";
  }

}
