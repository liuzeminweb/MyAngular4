import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseinfo-info',
  templateUrl: './baseinfo-info.page.html',
  styleUrls: ['./baseinfo-info.page.scss'],
})
export class BaseinfoInfoPage implements OnInit {
    isOn = false;
   myStyleS = {
        'width' : '50pt',
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
    mychipList2 = [
        {
            text: '音乐',
            isOn : false,
        },{
            text: '看书',
            isOn : false,
        },{
            text: '电竞',
            isOn : false,
        },{
            text: '潮牌',
            isOn : true,
        },{
            text: '运动',
            isOn : true,
        },{
            text: '户外',
            isOn : false,
        },{
            text: '旅行',
            isOn : true,
        },{
            text: '夜店',
            isOn : false,
        },{
            text: '球鞋',
            isOn : true,
        },{
            text: '电影',
            isOn : false,
        },{
            text: '摄影',
            isOn : false,
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
