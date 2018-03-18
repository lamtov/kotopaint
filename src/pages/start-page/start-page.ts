import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {ImageService} from "../../providers/image-service";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-start-page',
  templateUrl: 'start-page.html',
})
export class StartPage {
  bg_welcome_page: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imageService: ImageService, private alertCtrl: AlertController) {
    this.bg_welcome_page=this.imageService.getImageBackground("wellcome.png");
  }

  ionViewDidLoad() {
    // this.presentConfirm();
    console.log('ionViewDidLoad StartPage');
  }
//  presentConfirm() {

//   }
//
}
