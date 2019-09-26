import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {
    classArr = ['bgColor', 'bgColor2'];
    iIs = [
        {
            id : 1,
            value : '颜控',
            isOn : false
        },{
            id : 2,
            value : '话痨',
            isOn : false
        },{
            id : 3,
            value : '吃货',
            isOn : false
        },{
            id : 4,
            value : '潮人',
            isOn : false
        }
    ];
    iLikechipValue = [
        {
            id : 1,
            value : '颜控',
            isOn : false
        },{
            id : 2,
            value : '话痨',
            isOn : false
        },{
            id : 3,
            value : '吃货',
            isOn : false
        },{
            id : 4,
            value : '潮人',
            isOn : false
        }
    ];
    chipValue = [
        {
            id : 1,
            value : '颜控',
            isOn : false
        },{
            id : 2,
            value : '话痨',
            isOn : false
        },{
            id : 3,
            value : '吃货',
            isOn : false
        },{
            id : 4,
            value : '潮人',
            isOn : false
        },{
            id : 5,
            value : '颜控',
            isOn : false
        },{
            id : 6,
            value : '话痨',
            isOn : false
        },{
            id : 7,
            value : '吃货',
            isOn : false
        },{
            id : 8,
            value : '潮人',
            isOn : false
        }
    ]
  constructor() { }

  ngOnInit() {
  }
    checkedClass(thisChecked) {
      if (thisChecked) {

      }
    }
    banckFunction(){
        history.back();
    }
}
