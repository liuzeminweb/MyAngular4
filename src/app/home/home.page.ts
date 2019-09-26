import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    ngIsShowOneDIV = true;
    ngIsShowTowDIV = false;
    subscribeScoll;
    thisScroll ;
    leftPositionXNuber = {
        left: 0
    };
    constructor( private router: Router,
                 private route: ActivatedRoute) { }
    me = '男生';
    Iwant = '长期交往';
    ngOnInit() {
        this.onInt();
        const that = this;
        setTimeout(function () {
           // console.log(that.WindowScroll())
            that.WindowScroll();
        },1000);

    }
    WindowScroll() {
        ($("#tabsubject1")[0] as any ).getScrollElement().then(task => {
            //console.log($(task));
            this.thisScroll = $(task);
            this.subscribeScoll = fromEvent(  this.thisScroll,  'scroll')
            // debounceTime(500) // 防抖
                .subscribe((event) => {
                    this.onWindowScroll();
                });
        })
    }
    onWindowScroll() {
       // console.log(this.thisScroll[0].scrollTop);
        if( this.thisScroll[0].scrollTop >= 500 ){
            $('#myHeader1')[0].style.display = 'none';
        } else {
            $('#myHeader1')[0].style.display = 'block';
        }
    }
    onInt(){
        if (this.route.queryParams ) {
            this.route.queryParams
                .subscribe((params: Params) => {
                    this.me = params['me'];
                    this.Iwant = params['Iwant'];
                    if ( params['show'] == 1  ) {
                        this.ngIsShowOneDIV = true;
                        this.ngIsShowTowDIV = false;
                    } else if  ( params['show'] == 2  ) {
                        this.ngIsShowOneDIV = false;
                        this.ngIsShowTowDIV = true;
                    }
                });
        }
    }
    showMen() {
        this.ngIsShowOneDIV = ! this.ngIsShowOneDIV;
        this.ngIsShowTowDIV = ! this.ngIsShowTowDIV;
        this.me = '男生';
    }
    showWomen() {
        this.ngIsShowOneDIV = ! this.ngIsShowOneDIV;
        this.ngIsShowTowDIV = ! this.ngIsShowTowDIV;
        this.me = '女生';
    }
    goSignup(want) {
        this.Iwant = want;
        this.router.navigate(['/signup'], {
                    queryParams: {
                        me : this.me,
                        Iwant : this.Iwant
                     }
              });
    }
    leftPosition($event) {
        const thisDome = $($event.target).parent().children(".video_swiper").children("ul");
        var number = parseInt(thisDome.css('left')) + 120;
        if (number > 0 ) {
            number = 0;
        }
        thisDome.css('left',number+'px');
    }
    rightPosition($event) {
        const thisDome = $($event.target).parent().children(".video_swiper").children("ul");
        var number = parseInt(thisDome.css('left')) - 120;
        if (number < $($event.target).parent().width() - thisDome.width()) {
            number = $($event.target).parent().width() - thisDome.width();
        }
        thisDome.css('left',number+'px');
    }
    /* setData() {
           window.localStorage.setItem("myChange", JSON.stringify({ me: this.me, Iwant: this.Iwant }));
     }
     getData() {
            let json = window.localStorage.getItem("myChange");
            let obj = JSON.parse(json);
             console.log(obj.me);
             console.log(obj.Iwant);
           }*/
}