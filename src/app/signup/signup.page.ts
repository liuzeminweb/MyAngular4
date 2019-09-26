import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    myAgree1 = false;
    myAgree2 = false;
    me = '男生';
    Iwant = '长期交往';
    constructor( private router: Router,
               private route: ActivatedRoute) {
    }

  ngOnInit() {
        console.log()
      this.route.queryParams
          .subscribe((params: Params) => {
              this.me = params['me'];
              this.Iwant = params['Iwant'];
          });
  }
    choseMyAgree1() {
        this.myAgree1 = ! this.myAgree1;
    }
    choseMyAgree2() {
        this.myAgree2 = ! this.myAgree2;
    }
    goHome(me) {
       this.router.navigate(['/home'], {
            queryParams: {
                me : this.me,
                Iwant : this.Iwant,
                show : me,
            }
        });
    }
 /*   getData() {
        let json = window.localStorage.getItem("myChange");
        let obj = JSON.parse(json);
        console.log(obj.me);
        console.log(obj.Iwant);
    }*/
}
