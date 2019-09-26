import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-flop-who',
  templateUrl: './i-flop-who.page.html',
  styleUrls: ['./i-flop-who.page.scss'],
})
export class IFlopWhoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    banckFunction(){
        history.back();
    }
}
