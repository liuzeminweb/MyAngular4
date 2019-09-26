import { Component, OnInit } from '@angular/core';
import { InfoModelShowService } from '../info-model-show.service';

@Component({
  selector: 'app-baseinfo-setting',
  templateUrl: './baseinfo-setting.page.html',
  styleUrls: ['./baseinfo-setting.page.scss'],
})
export class BaseinfoSettingPage implements OnInit {
    showKefu = false;
  constructor(private infoModelShowService: InfoModelShowService) { }
  ngOnInit() {
  }
  returnIofo( ) {
      let a = this.infoModelShowService.phoneErrModel;
      return a;
  }
    returnIofoYc( ) {
        let a = this.infoModelShowService.modelYc;
        return a;
    }
    showErrModel($event) {
        this.infoModelShowService.modelYcFunction();
    }
    showKefuuModel($event) {
        this.infoModelShowService.modelYcFunctionFalse();
        this.showKefu = !this.showKefu;
    }
    showPhoneErrModel($event){
        this.infoModelShowService.phoneErrModelFunction();
    }
}
