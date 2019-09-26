import { Component, OnInit } from '@angular/core';
import { InfoModelShowService } from '../info-model-show.service';
@Component({
  selector: 'app-baseinfo-privacy',
  templateUrl: './baseinfo-privacy.page.html',
  styleUrls: ['./baseinfo-privacy.page.scss'],
})
export class BaseinfoPrivacyPage implements OnInit {
    pepperoni = false;
    modelShow ;
  constructor(private infoModelShowService: InfoModelShowService) {
  }

  ngOnInit() {
  }
    showModel() {
         this.pepperoni = !this.pepperoni;
        this.infoModelShowService.modelYcFunction();
    }
    /*getModelShow() {
        this.modelShow = this.infoModelShowService.getModelShow();
    }*/
    SureClick() {
        this.infoModelShowService.phoneErrModelFunction();
    }
}
