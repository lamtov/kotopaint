import { Injectable } from '@angular/core';
import { HttpModule  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ImageService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageService {

  constructor(public http: HttpModule ) {
    console.log('Hello ImageService Provider');
  }
  getImageBackground(image: string) {
    return "assets/image/" + image;
  }
}
