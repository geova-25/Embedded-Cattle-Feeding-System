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

  private getData() : any
  {
    return this.http.get(globals.urlServer + '/variables/');
  }

  public updateValues()
  {
    this.getData().subscribe(values =>
      {
        let valuesJSON = values.json();
        this.temperatureValue = valuesJSON.temperatura;
        this.humidityValue = valuesJSON.humedad;
        this.weightValue = valuesJSON.flexor;
      });

  }

  public openDoor()
  {
    this.http.put(globals.urlServer + "/servo/","{\"servo\":1}").subscribe(data => console.log(data));
  }


}
