import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import * as globals from '../../app/variables';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit
{
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  image: string=globals.urlServer + "/imagen/";
  i: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http)
  {

  }

  public goMonitor()
  {
    this.navCtrl.push(HelloIonicPage, {
      item: 1
    });
  }

  public updateImage()
  {
    this.image = this.image + this.i;
    this.i = this.i + 1;
  }

  ngOnInit(): void
  {
    this.updateImage();
  }

}
