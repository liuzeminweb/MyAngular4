import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-yz',
  templateUrl: './phone-yz.page.html',
  styleUrls: ['./phone-yz.page.scss'],
})
export class PhoneYzPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    banckFunction(){
        history.back();
    }
}
