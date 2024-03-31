import { Component } from '@angular/core';
import { BgImgServiceService } from './services/bg-img-service.service';
import { ProfileImgServiceService } from './services/profile-img-service.service';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cv';

  email="medoabdelhameed3@gmail.com"

  bg_src=this.bgImg.bg_img;
  
  profileImg=this.myImg.my_photo;

  constructor(private bgImg:BgImgServiceService, private myImg:ProfileImgServiceService){}

  ngOnInit(){
    AOS.init();
  }
  
}
