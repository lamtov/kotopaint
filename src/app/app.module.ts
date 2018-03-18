import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StartPage} from '../pages/start-page/start-page'
import {ImageService} from "../providers/image-service";
import { HttpModule } from '@angular/http';
import {FirstInputPage} from "../pages/first-input-page/first-input-page";
import {SecondeInputPage} from "../pages/seconde-input-page/seconde-input-page";
import {DataService} from "../providers/data-service";
import {OutputPage} from "../pages/output-page/output-page";
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '291d0fa9'
  }
};
@NgModule({
  declarations: [
    MyApp,
    StartPage,FirstInputPage,SecondeInputPage,OutputPage,
  ],
  imports: [HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,FirstInputPage,SecondeInputPage,OutputPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImageService,DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
