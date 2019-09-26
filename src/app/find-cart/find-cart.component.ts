import { Component, OnInit , Input , ViewChild  , EventEmitter , Output , OnChanges, SimpleChange  } from '@angular/core';
import { Slides, AlertController  } from '@ionic/angular';
declare var $: any;

@Component({
  selector: 'app-find-cart',
  templateUrl: './find-cart.component.html',
  styleUrls: ['./find-cart.component.scss']
})
export class FindCartComponent implements OnChanges {
    @ViewChild(Slides) slides: Slides;
    selectedItem;
    selectedIndex = 0;
    selectedParentIndex = 0;

    mystyle: {};
    slideunit0: {};
    imgNumber = 0;
    @Input()  cartArr;
    @Input() showMDiv;
    @Input() showBDiv;
    @Input() showFDiv;
    @Output() showEvevEmit = new EventEmitter();
    constructor( public alertCtrl: AlertController ) {}
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    }
    onClick( index ) {
        this.goToSlide(index);
    }
    goToSlide(index) {
        this.slides.slideTo(index.page, 500);
        this.selectedIndex = index.page;
        this.selectedParentIndex = index.pageParent;
    }
    slideChanged() {
        this.slides.getActiveIndex().then(task =>{
            let currentIndex = task;
            for (let i = 0 ; i < this.cartArr.length; i++) {
                if (  this.cartArr[ i ].page == currentIndex  ){
                    this.selectedParentIndex = this.cartArr[ i ].pageParent;
                }
            }
            this.selectedIndex = currentIndex;
        });
    }
    showMDivFunction(event) {
/*        console.log($(event.target).offset().top)
        console.log($('#tabsubject').offset())
        console.log(event)*/
        this.scollFunction( event );
        this.showMDiv = !this.showMDiv;
        this.showFDiv = false;
        this.showBDiv = false;
        var evevEmit = {
            tarEven : event,
            showMDiv : this.showMDiv,
            showFDiv : this.showFDiv,
            showBDiv : this.showBDiv,
        };
        this.showEvevEmit.emit(evevEmit);
    }
    showFDivFunction(event) {
        this.scollFunction( event );
        this.showMDiv = false;
        this.showFDiv = !this.showFDiv;
        this.showBDiv = false;
        var evevEmit = {
            tarEven : event,
            showMDiv : this.showMDiv,
            showFDiv : this.showFDiv,
            showBDiv : this.showBDiv,
        };
        this.showEvevEmit.emit(evevEmit);
    }
    showBDivFunction(event) {
        this.scollFunction( event );
        this.showMDiv = false;
        this.showFDiv = false;
        this.showBDiv = !this.showBDiv;
        var evevEmit = {
            tarEven : event,
            showMDiv : this.showMDiv,
            showFDiv : this.showFDiv,
            showBDiv : this.showBDiv,
        };
        this.showEvevEmit.emit(evevEmit);
       /* if ( this.showBDiv ) {
            document.getElementsByClassName('scrollDiv')[0].setAttribute('style', 'overflow-y:hidden;');
        } else {
            document.getElementsByClassName('scrollDiv')[0].setAttribute('style', 'overflow-y:auto;');
        }
        console.log(document.getElementsByClassName('scrollDiv')[0]);*/
    }

    scollFunction( event ) {
        var myscrollTop = 0;
        var myTargetTop = 520;
        var targetTop =  $(event.target).offset().top;
        myscrollTop =  myTargetTop - targetTop;
        $("#tabsubject")[0].getScrollElement().then(task => {
            //console.log($(task)[0].scrollTop);
            $(task)[0].scrollTop = $(task)[0].scrollTop - myscrollTop;
        });
    }
  ngOnInit() {
      this.mystyle = {
          'height' : screen.height - 100 + 'px'
      };
      for (let i = 0 ; i < this.cartArr.length; i++) {
          if ( this.cartArr[ i ].pageParent == 0  ){
              this.imgNumber++;
          }
      }
      this.slideunit0 = {
          'width': ( 100 / this.imgNumber ) - 2 + '%',
          'margin-right': 2 + '% ',
      };
  }

}
