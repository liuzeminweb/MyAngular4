import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-setting',
  templateUrl: './preference-setting.page.html',
  styleUrls: ['./preference-setting.page.scss'],
})
export class PreferenceSettingPage implements OnInit {
    isOn = false;
    myStyleS = {
        'width' : '62px',
        'font-size': '15px'
    };
    mychipList = [
        {
            text: '健身',
            isOn : false,
        },{
            text: '颜控',
            isOn : true,
        },{
            text: '土豪',
            isOn : false,
        },{
            text: '喝酒',
            isOn : false,
        },{
            text: '工作狂',
            isOn : true,
        },{
            text: '潮人',
            isOn : false,
        },{
            text: '吃货',
            isOn : true,
        },{
            text: '话痨',
            isOn : true,
        },{
            text: '闷骚',
            isOn : false,
        },{
            text: '铲屎官',
            isOn : false,
        }
    ]
  constructor() { }

  ngOnInit() {
  }
    banckFunction(){
        history.back();
    }
}
