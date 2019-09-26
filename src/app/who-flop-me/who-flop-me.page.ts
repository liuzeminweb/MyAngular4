import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-flop-me',
  templateUrl: './who-flop-me.page.html',
  styleUrls: ['./who-flop-me.page.scss'],
})
export class WhoFlopMePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    banckFunction(){
        history.back();
    }
}
