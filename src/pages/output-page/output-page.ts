import {Component} from '@angular/core';
import {ImageService} from "../../providers/image-service";
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {FirstInputPage} from "../first-input-page/first-input-page";
@Component({
  selector: 'page-output-page',
  templateUrl: 'output-page.html',
})
export class OutputPage {
  bg_image_above: string;
  firstInputValue: {}
  secondInputValue: {}

  S_matsan: number;
  S_mattien: number;
  S_matbenhong: number;
  S_sonnoithat: number;
  S_sonngoaithat: number;
  dataService: {}
  totalMoney:number;
  soTang:number;
  outputData: Array<{id: number, name: any, S_total: number, dophu: any, soLop: number, lscm: number, thung: string, type: String,image:String, cost:number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private imageService: ImageService, public data_Service: DataService,private alertCtrl: AlertController) {
    this.bg_image_above = imageService.getImageBackground("nhadep.jpg")
    this.firstInputValue = navParams.get("firstInputValue");
    this.secondInputValue = navParams.get("secondInputValue");
    var a = navParams.get("firstInputValue").value_dai; //chieu dai
    var b = navParams.get("firstInputValue").value_rong; //chieu rong
    var x = navParams.get("firstInputValue").value_mat; //So mat  can son mau
    console.log(a,b)
    this.soTang=  navParams.get("firstInputValue").value_tang;
    var h = navParams.get("firstInputValue").value_tang * navParams.get("firstInputValue").value_cao; //So tang, chieu cao 1 tang
    this.S_matsan = Number(a * b);
    if(x==1){
      this.S_mattien = Number(b * h);
    } else if(x==2){
      this.S_mattien = Number((a+b) * h);
    } else if(x==3){
      this.S_mattien = Number((b+a+b) * h);
    } else {
      this.S_mattien = Number((a+b+a+b) * h);
    }


    this.S_sonnoithat = this.S_matsan * navParams.get("firstInputValue").value_tang * 4;

    this.S_sonngoaithat = Number(a + b) * 2 * h;
    this.S_matbenhong = this.S_sonngoaithat-this.S_mattien;
    this.dataService = data_Service;
    this.outputData=[];
    this.totalMoney=0;
    this.ComputeData(navParams.get("secondInputValue"), data_Service);
  }

  ComputeData(secondInputValue, data_Service) {
    if (secondInputValue.bbnt.count > 0 && secondInputValue.bbnt.idName >= 0) {
      this.outputData.push(this.getBBNT(secondInputValue.bbnt.idName, secondInputValue.bbnt.count, data_Service))
    }
    if (secondInputValue.bbnt2.count > 0 && secondInputValue.bbnt2.idName >= 0) {
      this.outputData.push(this.getBBNT2(secondInputValue.bbnt2.idName, secondInputValue.bbnt2.count, data_Service))
    }
    if (secondInputValue.slnt.count > 0 && secondInputValue.slnt.idName >= 0) {
      this.outputData.push(this.getSLNT(secondInputValue.slnt.idName, secondInputValue.slnt.count, data_Service))
    }
    if (secondInputValue.slnt2.count > 0 && secondInputValue.slnt2.idName >= 0) {
      this.outputData.push(this.getSLNT2(secondInputValue.slnt2.idName, secondInputValue.slnt2.count, data_Service))
    }
    if (secondInputValue.spnt.count > 0 && secondInputValue.spnt.idName >= 0) {
      this.outputData.push(this.getSPNT(secondInputValue.spnt.idName, secondInputValue.spnt.count, data_Service))
    }
    if (secondInputValue.spnt2.count > 0 && secondInputValue.spnt2.idName >= 0) {
      this.outputData.push(this.getSPNT2(secondInputValue.spnt2.idName, secondInputValue.spnt2.count, data_Service))
    }
    if (secondInputValue.sstnt.count > 0 && secondInputValue.sstnt.idName >= 0) {
      this.outputData.push(this.getSSTNT(secondInputValue.sstnt.idName, secondInputValue.sstnt.count, data_Service))
    }
    if (secondInputValue.sct.count > 0 && secondInputValue.sct.idName >= 0) {
      this.outputData.push(this.getSCT(secondInputValue.sct.idName, secondInputValue.sct.count, data_Service))
    }

    this.outputData.forEach(i=>{
      this.totalMoney+=i.cost;
    })
  }

  private getBBNT(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_sonnoithat * count;
    var lscm = parseInt(S_total / data_Service.list_bbtn[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_bbtn[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_bbtn[idName].pack.p1, data_Service.list_bbtn[idName].pack.p2)
    var type = data_Service.list_bbtn[idName].type;
    var cost=thung.luongP2*data_Service.list_bbtn[idName].cost.p2+thung.luongP1*data_Service.list_bbtn[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_bbtn[idName].text,
      S_total: S_total,
      dophu: data_Service.list_bbtn[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " bao "+ data_Service.list_bbtn[idName].pack.p1+type+ " và " + thung.luongP2+ " bao "+ data_Service.list_bbtn[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_bbtn[idName].image,
      cost:cost
    }
  }

  private getBBNT2(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_sonngoaithat * count;
    var lscm = parseInt(S_total / data_Service.list_bbtn2[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_bbtn2[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_bbtn2[idName].pack.p1, data_Service.list_bbtn2[idName].pack.p2)
    var type = data_Service.list_bbtn2[idName].type;
    var cost=thung.luongP2*data_Service.list_bbtn2[idName].cost.p2+thung.luongP1*data_Service.list_bbtn2[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_bbtn2[idName].text,
      S_total: S_total,
      dophu: data_Service.list_bbtn2[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " bao "+ data_Service.list_bbtn2[idName].pack.p1+type+ " và " + thung.luongP2+ " bao "+ data_Service.list_bbtn2[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_bbtn2[idName].image,
      cost:cost
    }
  }



  private getSLNT(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_sonnoithat * count;

    var lscm = parseInt(S_total / data_Service.list_slnt[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_slnt[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_slnt[idName].pack.p1, data_Service.list_slnt[idName].pack.p2)
    var type = data_Service.list_slnt[idName].type;
    var cost=thung.luongP2*data_Service.list_slnt[idName].cost.p2+thung.luongP1*data_Service.list_slnt[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_slnt[idName].text,
      S_total: S_total,
      dophu: data_Service.list_slnt[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_slnt[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_slnt[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_slnt[idName].image,
      cost:cost
    }
  }

  private getSLNT2(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_mattien * count;
    var lscm = parseInt(S_total / data_Service.list_slnt2[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_slnt2[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_slnt2[idName].pack.p1, data_Service.list_slnt2[idName].pack.p2)
    var type = data_Service.list_slnt2[idName].type;
    var cost=thung.luongP2*data_Service.list_slnt2[idName].cost.p2+thung.luongP1*data_Service.list_slnt2[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_slnt2[idName].text,
      S_total: S_total,
      dophu: data_Service.list_slnt2[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_slnt2[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_slnt2[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_slnt2[idName].image,
      cost:cost
    }
  }

  private getSPNT(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_sonnoithat * count;
    var lscm = parseInt(S_total / data_Service.list_spnt[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_spnt[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_spnt[idName].pack.p1, data_Service.list_spnt[idName].pack.p2)
    var type = data_Service.list_spnt[idName].type;
    var cost=thung.luongP2*data_Service.list_spnt[idName].cost.p2+thung.luongP1*data_Service.list_spnt[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_spnt[idName].text,
      S_total: S_total,
      dophu: data_Service.list_spnt[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_spnt[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_spnt[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_spnt[idName].image,
      cost:cost
    }
  }


  private getSPNT2(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_mattien * count;
    var lscm = parseInt(S_total / data_Service.list_spnt2[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_spnt2[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_spnt2[idName].pack.p1, data_Service.list_spnt2[idName].pack.p2)
    var type = data_Service.list_spnt2[idName].type;
    var cost=thung.luongP2*data_Service.list_spnt2[idName].cost.p2+thung.luongP1*data_Service.list_spnt2[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_spnt2[idName].text,
      S_total: S_total,
      dophu: data_Service.list_spnt2[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_spnt2[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_spnt2[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_spnt2[idName].image,
      cost:cost
    }
  }

  private getSSTNT(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = this.S_matsan * count*this.soTang ;
    var lscm = parseInt(S_total / data_Service.list_sstnt[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_sstnt[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_sstnt[idName].pack.p1, data_Service.list_sstnt[idName].pack.p2)
    var type = data_Service.list_sstnt[idName].type;
    var cost=thung.luongP2*data_Service.list_sstnt[idName].cost.p2+thung.luongP1*data_Service.list_sstnt[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_sstnt[idName].text,
      S_total: S_total,
      dophu: data_Service.list_sstnt[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_sstnt[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_sstnt[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_sstnt[idName].image,
      cost:cost
    }
  }

  private getSCT(idName: number, count: number,data_Service) {
    // outputData:Array<{id: number, name: String, S_totoal: String, dophu:String,soLop:number,lscm:String, thung:String}>;
    var S_total = (this.S_sonngoaithat-this.S_mattien) * count;
    var lscm = parseInt(S_total / data_Service.list_sct[idName].dophu +"");
    if(parseInt(S_total+"")%data_Service.list_sct[idName].dophu!=0){
      lscm++;
    }
    var thung = this.getThung(lscm, data_Service.list_sct[idName].pack.p1, data_Service.list_sct[idName].pack.p2)
    var type = data_Service.list_sct[idName].type;
    var cost=thung.luongP2*data_Service.list_sct[idName].cost.p2+thung.luongP1*data_Service.list_sct[idName].cost.p1;
    return {
      id: 0,
      name: data_Service.list_sct[idName].text,
      S_total: S_total,
      dophu: data_Service.list_sct[idName].dophu,
      soLop: count,
      lscm: lscm,
      thung: "("+thung.luongP1+ " thùng "+ data_Service.list_sct[idName].pack.p1+type+ " và " + thung.luongP2+ " thùng "+ data_Service.list_sct[idName].pack.p2+type + " )",
      type: type,
      image:data_Service.list_sct[idName].image,
      cost:cost
    }
  }



  getThung(lscm: number, p1: number, p2: number) {
    if(lscm<p2) return{
      luongP1: 0,
      luongP2: 1
    }
    if(lscm<p1) return{
      luongP1: 1,
      luongP2: 0
    }
    var luongP1 = parseInt(lscm / p1 +"");
    var du = lscm % p1;
    var luongP2 = 0;
    if (du % p2 >= p2 / 2) {
      luongP2 = parseInt(du / p2 +"") + 1;
    } else {
      luongP2 = parseInt(du / p2 +"");
    }
    return {
      luongP1: luongP1,
      luongP2: luongP2
    }
  }

  ionViewDidLoad() {
    console.log(this.firstInputValue);
    console.log(this.secondInputValue);
  }
  next(){
    let confirm = this.alertCtrl.create({
      title: 'Thoát Về Trang Đầu?',
      message: 'Thông tin đang hiển thị sẽ mất, bạn có muốn thoát?',
      buttons: [
        {
          text: 'Không',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Có',
          handler: () => {
            this.navCtrl.push(FirstInputPage,{firstInputValue:this.firstInputValue});
          }
        }
      ]
    });
    confirm.present();

  }

}
