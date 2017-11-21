import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import * as globals from '../../app/variables';

import { ItemDetailsPage } from '../item-details/item-details';

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

  itemTapped(event, item)
  {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
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
