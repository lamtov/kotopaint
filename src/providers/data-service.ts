import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {
  public list_bbtn:Array<{id: number, text: String, dophu:number, pack:{}, type:String, cost:{}, image:String }>; //Bột bả nội thất
  public list_bbtn2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; //Bột bả ngoại thất
  public list_slnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; //Sơn lót nội thất
  public list_slnt2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; //Sơn lót ngoại thất
  public list_spnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; // Sơn phủ nội thất
  public list_spnt2:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; // Sơn phủ ngoại thất
  public list_sstnt:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{} , image:String}>; // Sơn siêu trắng nội thất
  public list_sct:Array<{id: number, text: String, dophu:number,pack:{}, type:String, cost:{}, image:String }>; // Sơn chống thấm
  constructor(public http: Http) {
    this.list_bbtn = [{id:0,text:"Bột bả nội thất K2",dophu:3, pack:{p1:40, p2:20}, type:"kg",cost:{p1:410,p2:210}, image:"assets/image/botbanoi.png"}]
    this.list_bbtn2 = [{id:0,text:"Bột bả ngoại thất K1",dophu:3,pack:{p1:40, p2:20}, type:"kg",cost:{p1:455,p2:230}, image:"assets/image/botbangoai.png"}]
    this.list_slnt = [{id:0,text:"Primer K2",dophu:10,pack:{p1:18, p2:5}, type:"lit",cost:{p1:1830,p2:535}, image:"assets/image/Primerk21.png"}]
    this.list_slnt2 = [
      {id:0,text:"Primer K1",dophu:10,pack:{p1:18, p2:5}, type:"lit",cost:{p1:2045,p2:590}, image:"assets/image/Primerk11.png"},
      {id:1,text:"LOT+NANO",dophu:12,pack:{p1:18, p2:5}, type:"lit",cost:{p1:2860,p2:815}, image:"assets/image/Lot+Nano.png"}]
    this.list_spnt = [
      {id:0,text:"ECO K2",dophu:10,pack:{p1:18, p2:5}, type:"lit",cost:{p1:815,p2:235}, image:"assets/image/EcoK21.png"},
      {id:1,text:"Lau chùi",dophu:12,pack:{p1:18, p2:5}, type:"lit",cost:{p1:1600,p2:458}, image:"assets/image/clean.png"},
      {id:2,text:"Gloss K2",dophu:12,pack:{p1:17, p2:5}, type:"lit",cost:{p1:2870,p2:865}, image:"assets/image/Gloss K2.png"},
      {id:3,text:"Super Gloss K2",dophu:14,pack:{p1:5, p2:1}, type:"lit",cost:{p1:1230,p2:260}, image:"assets/image/Super Gloss K2.png"}]

    this.list_spnt2 = [
      {id:0,text:"ECO K1",dophu:10,pack:{p1:17, p2:5}, type:"lit",cost:{p1:1345,p2:415}, image:"assets/image/EcoK11.png"},
      {id:1,text:"Gloss K1",dophu:12,pack:{p1:5, p2:1}, type:"lit",cost:{p1:1280,p2:268}, image:"assets/image/Gloss K1.png"},
      {id:2,text:"Super Gloss K1",dophu:14,pack:{p1:5, p2:1}, type:"lit",cost:{p1:1600,p2:330}, image:"assets/image/Super Gloss K1.png"}]

    this.list_sstnt = [{id:0,text:"CEIL WHITE",dophu:12,pack:{p1:18, p2:5}, type:"lit",cost:{p1:1550,p2:450}, image:"assets/image/Ceilwhite1.png"}]
    this.list_sct = [{id:0,text:"Waterproof",dophu:7,pack:{p1:16, p2:5}, type:"lit",cost:{p1:2465,p2:790}, image:"assets/image/WaterProof.png"}]
  }

}
