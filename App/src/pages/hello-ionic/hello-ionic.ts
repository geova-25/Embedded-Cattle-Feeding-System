import { Component } from '@angular/core';
import { Http } from '@angular/http';
import * as globals from '../../app/variables'
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage
{

  temperatureValue: string;
  humidityValue: string;
  username: string;
  password: string;
  usernameCreate: string;
  passwordCreate: string;
  weightValue: string;
  hideSystem: boolean;
  hideLogin: boolean;
  hideCreateUser: boolean;
  badLogin: boolean;

  constructor(public nav: NavController, public navParams: NavParams , public http: Http)
  {
    if(this.navParams.get('item') == 1)
    {
      this.nav.remove(0);
      this.temperatureValue = "-";
      this.humidityValue = "-";
      this.weightValue = "-";
      this.username = "";
      this.badLogin = true;
      this.hideCreateUser = true;
      this.hideSystem = false;
      this.hideLogin = true;
    }
    else
    {
      this.temperatureValue = "-";
      this.humidityValue = "-";
      this.weightValue = "-";
      this.username = "";
      this.badLogin = true;
      this.hideCreateUser = true;
      this.hideSystem = true;
      this.hideLogin = false;
    }

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

  public goLogIn()
  {
    this.hideCreateUser = true;
    this.hideLogin = false;
    this.badLogin = true;
  }

  public logIn()
  {
    this.badLogin = true;
    let stringUser = "{" +"\"nombre\":" + "\"" + this.username + "\"" + "," + "\"pass\":" + "\"" + this.password + "\"" + "}";
    this.http.put(globals.urlServer + '/login/',stringUser).subscribe(
      data =>
      {
        this.hideSystem = false;
        this.hideLogin = true;
        this.badLogin = true;
      },
      err =>
      {
        this.badLogin = false;
      });
  }

  public openDoor()
  {
    this.http.put(globals.urlServer + "/servo/","{\"servo\":1}").subscribe(data => console.log(data));
  }

  public goSignIn()
  {
    this.hideCreateUser = false;
    this.hideLogin = true;
    this.badLogin = true;
  }

  public signIn()
  {
    this.badLogin = true;
    let stringUser = "{" +"\"nombre\":" + "\"" + this.usernameCreate + "\"" + "," + "\"pass\":" + "\"" + this.passwordCreate + "\"" + "}";
    this.http.post(globals.urlServer + '/users/',stringUser).subscribe(
      data =>
      {
        this.hideCreateUser = true;
        this.hideLogin = false;
        this.badLogin = true;
      },
      err =>
      {
        this.badLogin = false;
      });
  }

}
