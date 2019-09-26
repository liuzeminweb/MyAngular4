import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-find-serach',
  templateUrl: './find-serach.component.html',
  styleUrls: ['./find-serach.component.scss']
})
export class FindSerachComponent implements OnInit {
   ngIsShow = false;
   ngIsShowSX = false;
   ngIsShowDQ = false;
   ngIsShowPX = false;
    myStyle = {
        'background':  this.ngIsShow ? '#ffffff' : '#f2f2f2',
    }
  constructor() { }

  ngOnInit() {
  }
    ngShow() {
        this.ngIsShow = ! this.ngIsShow;
        this.setCurrentStyles();
    }
    ngShowSX() {
        this.ngIsShowPX = false;
        this.ngIsShowSX = ! this.ngIsShowSX;
    }
    ngShowPX() {
        this.ngIsShowSX = false;
        this.ngIsShowPX = ! this.ngIsShowPX;
    }
    ngShowDQ() {
        this.ngIsShowDQ = ! this.ngIsShowDQ;
    }
    setCurrentStyles() {
        this.myStyle = {
            'background':  this.ngIsShow ? '#ffffff' : '#f2f2f2',
        };
    }
    selectedFunction($event) {
        const thisDome = $($event.target).children(".selectSpan");
        $('.selectSpan').removeClass('on');
        thisDome.addClass('on');
    }
}
