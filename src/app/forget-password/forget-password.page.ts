import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
    checkedTrue = true;
    constructor() { }
    ngOnInit() {
    }
    checkedBox() {
        this.checkedTrue = !this.checkedTrue;
    }
    banckFunction(){
        history.back();
    }
}