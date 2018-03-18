import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ImageService} from "../../providers/image-service";
import { AlertController } from 'ionic-angular';
import {FormBuilder} from "@angular/forms";
import {SecondeInputPage} from "../seconde-input-page/seconde-input-page";
@Component({
  selector: 'page-first-input-page',
  templateUrl: 'first-input-page.html',
})
export class FirstInputPage {
  bg_image_above:string;
  value_dai:number;
  value_rong:number;
  value_cao:number;
  value_tang:number;
  value_mat:number;
  value_mat2:number;
  firstInputValue:{}
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, private imageService: ImageService,private alertCtrl: AlertController) {
    this.bg_image_above=imageService.getImageBackground("nhadep.jpg")
    if(navParams.get("firstInputValue")){
      this.value_dai=navParams.get("firstInputValue").value_dai;
      this.value_rong=navParams.get("firstInputValue").value_rong;
      this.value_cao=navParams.get("firstInputValue").value_cao;
      this.value_tang=navParams.get("firstInputValue").value_tang;
      this.value_mat=navParams.get("firstInputValue").value_mat;
      this.value_mat2=navParams.get("firstInputValue").value_mat2;

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstInputPage');
  }

  next() {
    if (!this.value_dai || !this.value_rong || !this.value_cao || !this.value_mat || !this.value_mat2 || !this.value_tang) {
      let alert = this.alertCtrl.create({
        title: 'Thiếu Số Liệu!',
        subTitle: 'Bận cần điền đủ số liệu ở trên!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.firstInputValue = {
        value_dai: this.value_dai,
        value_rong: this.value_rong,
        value_cao: this.value_cao,
        value_tang: this.value_tang,
        value_mat: this.value_mat,
        value_mat2: this.value_mat2

      }

      this.navCtrl.push(SecondeInputPage, {firstInputValue: this.firstInputValue});
    }
  }
  setValueMat2(){
    if (this.value_mat>4 || this.value_mat<=0) {
      let alert = this.alertCtrl.create({
        title: 'Sai Số Liệu!',
        subTitle: 'Số mặt cần sơn tối đa chỉ có 4!',
        buttons: ['OK']
      });
      alert.present();
      this.value_mat=0;
    } else {
      this.value_mat2=4-this.value_mat;
    }

  }
}
