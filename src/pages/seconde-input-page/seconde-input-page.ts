import {Component} from '@angular/core';
import {ImageService} from "../../providers/image-service";
import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {OutputPage} from "../output-page/output-page";
@Component({
  selector: 'page-seconde-input-page',
  templateUrl: 'seconde-input-page.html',
})


export class SecondeInputPage {
  bg_image_above: string;
  firstInputValue: {}
  secondInputValue: {}

  public list_bbtn:Array<{id: number, text: String, dophu:number, pack:{}, type:String, cost:{}, image:String }>; //Bột bả nội thất
  public list_bbtn2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; //Bột bả ngoại thất
  public list_slnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; //Sơn lót nội thất
  public list_slnt2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; //Sơn lót ngoại thất
  public list_spnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; // Sơn phủ nội thất
  public list_spnt2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; // Sơn phủ ngoại thất
  public list_sstnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; // Sơn siêu trắng nội thất
  public list_sct:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; // Sơn chống thấm


  constructor(public navCtrl: NavController, public navParams: NavParams, private imageService: ImageService, public dataService: DataService) {
    this.firstInputValue = navParams.get("firstInputValue");
    this.secondInputValue = {
      bbnt: {idName: -1, count: -1},
      bbnt2: {idName: -1, count: -1},
      slnt: {idName: -1, count: -1},
      slnt2: {idName: -1, count: -1},
      spnt: {idName: -1, count: -1},
      spnt2: {idName: -1, count: -1},
      sstnt: {idName: -1, count: -1},
      sct: {idName: -1, count: -1}
    }


    this.bg_image_above = imageService.getImageBackground("nhadep.jpg")
    this.list_bbtn = dataService.list_bbtn;
    this.list_bbtn2 = dataService.list_bbtn2;
    this.list_slnt = dataService.list_slnt;
    this.list_slnt2 = dataService.list_slnt2;
    this.list_spnt = dataService.list_spnt;
    this.list_spnt2 = dataService.list_spnt2;
    this.list_sstnt = dataService.list_sstnt;
    this.list_sct = dataService.list_sct;

  }

  ionViewDidLoad() {

  }
  next(){

    this.navCtrl.push(OutputPage,{firstInputValue:this.firstInputValue, secondInputValue:this.secondInputValue});
  }

}
