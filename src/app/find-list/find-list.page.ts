import { Component, OnInit , ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent } from 'rxjs';
@Component({
    selector: 'app-find-list',
    templateUrl: './find-list.page.html',
    styleUrls: ['./find-list.page.scss'],
})
export class FindListPage implements OnInit {
    isShow  = true;
    showMDiv = false;
    showFDiv = false;
    showBDiv = false;
    showErr = false;
    showKefu = false;
    subscribeScoll;
    thisScroll ;
    public items: Array<{ title: string; note: string; image: string; cartArr: any }> = [];

    constructor() {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                image: '1',
                cartArr: [
                    {
                        id: 0,
                        name: 'a1',
                        pageParent: 0,
                        img: 0,
                        page: 0
                    },
                    {
                        id: 1,
                        name: 'a1',
                        pageParent: 0,
                        img: 1,
                        page: 1
                    },
                    {
                        id: 2,
                        name: 'a1',
                        pageParent: 0,
                        img: 2,
                        page: 2
                    },
                    {
                        id: 1,
                        name: 'a1',
                        pageParent: 1,
                        img: 3,
                        page: 3
                    },
                    {
                        id: 2,
                        name: 'a1',
                        pageParent: 1,
                        img: 4,
                        page: 4
                    },
                    {
                        id: 3,
                        name: 'a1',
                        pageParent: 2,
                        img: 5,
                        page: 5
                    },
                    {
                        id: 4,
                        name: 'a1',
                        pageParent: 2,
                        img: 6,
                        page: 6
                    },
                    {
                        id: 5,
                        name: 'a1',
                        pageParent: 2,
                        img: 7,
                        page: 7
                    },
                ]
            });
        }
    }

    ngOnInit() {
        const that = this;
        setTimeout(function () {
            // console.log(that.WindowScroll())
            that.WindowScroll();
        },1000);
    }
    WindowScroll(){
        ($("#tabsubject")[0] as any ).getScrollElement().then(task => {
          //  console.log($(task));
            this.thisScroll = $(task);
            this.subscribeScoll = fromEvent(  this.thisScroll,  'scroll')
            // debounceTime(500) // 防抖
                .subscribe((event) => {
                    this.onWindowScroll();
                });
        });
    }
    onWindowScroll() {
       // console.log(this.thisScroll[0].scrollTop);
        if( this.thisScroll[0].scrollTop >= 500 ){
            $('#myHeader')[0].style.display = 'none';
        } else {
            $('#myHeader')[0].style.display = 'block';
        }
    }
    onShowEvevEmit($event) {
       // console.log($event);
        this.showMDiv = $event.showMDiv;
        this.showFDiv = $event.showFDiv;
        this.showBDiv =  $event.showBDiv;
    }
    showMDivFunction($event) {
        this.showMDiv = !this.showMDiv;
        this.showFDiv = false;
        this.showBDiv = false;
    }
    showFDivFunction($event) {
        this.showMDiv = false;
        this.showFDiv = !this.showFDiv;
        this.showBDiv = false;
    }
    showBDivFunction($event) {
        this.showMDiv = false;
        this.showFDiv = false;
        this.showBDiv = !this.showBDiv;
    }
    showErrModel($event){
        this.showMDiv = false;
        this.showFDiv = false;
        this.showBDiv = false;
        this.showErr = !this.showErr;
    }
    showKefuuModel($event) {
        this.showErr = false;
        this.showKefu = !this.showKefu;
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        console.log(infiniteScroll);
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.items.push({
                    title: 'Item ' + i,
                    note: 'This is item #' + i,
                    image: '1',
                    cartArr: [
                        {
                            id: 0,
                            name: 'a1',
                            pageParent: 0,
                            img: 0,
                            page: 0
                        },
                        {
                            id: 1,
                            name: 'a1',
                            pageParent: 1,
                            img: 1,
                            page: 1
                        },
                        {
                            id: 2,
                            name: 'a1',
                            pageParent: 1,
                            img: 2,
                            page: 2
                        },
                        {
                            id: 3,
                            name: 'a1',
                            pageParent: 2,
                            img: 3,
                            page: 3
                        },
                        {
                            id: 4,
                            name: 'a1',
                            pageParent: 2,
                            img: 4,
                            page: 4
                        },
                        {
                            id: 5,
                            name: 'a1',
                            pageParent: 2,
                            img: 5,
                            page: 5
                        },
                    ]
                });
            }
            infiniteScroll.target.complete();
             if (this.items.length > 40) {
                this.isShow = false;
            }
        }, 500);
    }
}
