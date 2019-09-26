import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  myCheckImg = false;
  public anyList: any;
  constructor(private http: HttpClient ) {
    /*  this.loginForm = fb.group({
          defaultFormEmail: ['', Validators.required],
          defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
      });*/
  }
/*  submit(form: any) {
      const success = this._el.nativeElement.querySelectorAll('.counter-success');
      const danger = this._el.nativeElement.querySelectorAll('.counter-danger');
      const textSuccess = this._el.nativeElement.querySelectorAll('.text-success');
      const textDanger = this._el.nativeElement.querySelectorAll('.text-danger');
      success.forEach((element: any) => {
          this._r.removeClass(element, 'counter-success');
      });
      danger.forEach((element: any) => {
          this._r.removeClass(element, 'counter-danger');
      });
      textSuccess.forEach((element: any) => {
          this._r.setStyle(element, 'visibility', 'hidden');
      });
      textDanger.forEach((element: any) => {
          this._r.setStyle(element, 'visibility', 'hidden');
      });
      form.reset();
  }*/
  ngOnInit() {
      this.http.get("apidata/LMWeb/login/testlogin")
          .subscribe(res=>{ console.log(res) });
   /*   this.http.post("apidata/LMWeb/login/testlogin",{id:1})
          .subscribe(res=>{ console.log(res) })*/
  }
    choseMyCheckImg() {
        this.myCheckImg = !this.myCheckImg;
    }
    banckFunction(){
        history.back();
    }
}
