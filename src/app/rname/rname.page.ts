import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-rname',
  templateUrl: './rname.page.html',
  styleUrls: ['./rname.page.scss'],
})
export class RnamePage implements OnInit {
  showTishi = false;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  showTishiF() {
      this.showTishi = true;
      window.setTimeout( this.goRouter(),3000 );
  }
    goRouter() {
        //window.location.assign('/home');
        console.log(this)
        this.router.navigateByUrl('home');
    }
    banckFunction() {
        history.back();
    }
}
