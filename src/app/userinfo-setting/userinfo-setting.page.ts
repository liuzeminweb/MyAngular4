import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo-setting',
  templateUrl: './userinfo-setting.page.html',
  styleUrls: ['./userinfo-setting.page.scss'],
})
export class UserinfoSettingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    banckFunction(){
        history.back();
    }
}
