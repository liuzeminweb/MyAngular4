import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-baseinfo-photo',
  templateUrl: './baseinfo-photo.page.html',
  styleUrls: ['./baseinfo-photo.page.scss'],
})
export class BaseinfoPhotoPage implements OnInit {
    pepperoni = true;
    dadShow = true;
    imgsrc1 = '../../assets/imgs/17yera.png';
    show1 = false;
    imgsrc2 = '';
    show2 = true;
    imgsrc3 = '';
    show3 = true;
    imgsrc4 = '';
    show4 = true;
    imgsrc5 = '';
    show5 = true;
    imgsrc6 = '';
    show6 = true;
    constructor( public _d: DomSanitizer) {
    }
    ngOnInit() {
        $('.jq22').dad();
   }
    preImg(event  , imgNumber) {
        const file = event.srcElement.files[0];
        if (file) {
            if ( file.type && !/image/i.test(file.type)) {
                return false;
            }
            const reader = new FileReader();
            const windowURL = window.URL;
            const dataURL = windowURL.createObjectURL(file);
           /* this.imgNumbe = dataURL; // 获取上传的图片临时路径*/
           // this.dadShow = false;
            if ( imgNumber == '1') {
                this.imgsrc1 = dataURL;
                this.show1 = false;
            } else if ( imgNumber == '2') {
                this.imgsrc2 = dataURL;
                this.show2 = false;
            } else if ( imgNumber == '3') {
                this.imgsrc3 = dataURL;
                this.show3 = false;
            } else if ( imgNumber == '4') {
                this.imgsrc4 = dataURL;
                this.show4 = false;
            } else if ( imgNumber == '5') {
                this.imgsrc5 = dataURL;
                this.show5 = false;
            } else if ( imgNumber == '6') {
                this.imgsrc6 = dataURL;
                this.show6 = false;
            }
        }
        $(event.target).parent().parent().removeClass('example')
        console.log($(event.target).parent().parent());
      //  this.dadShow = true;
        $('.jq22').dad();

    }
    delThisImg(event  , imgNumber) {
        $(event.target).parent().parent().addClass('example');
       // this.dadShow = false;
        if ( imgNumber == '1') {
            this.imgsrc1 = '';
            this.show1 = true;
        } else if ( imgNumber == '2') {
            this.imgsrc2 = '';
            this.show2 = true;
        } else if ( imgNumber == '3') {
            this.imgsrc3 = '';
            this.show3 = true;
        } else if ( imgNumber == '4') {
            this.imgsrc4 = '';
            this.show4 = true;
        } else if ( imgNumber == '5') {
            this.imgsrc5 = '';
            this.show5 = true;
        } else if ( imgNumber == '6') {
            this.imgsrc6 = '';
            this.show6 = true;
        }
       // this.dadShow = true;
        $('.example').removeClass('dads-children').removeClass(' dad-draggable-area');
        console.log($(event.target).parent().parent())
        $('.jq22').dad();
    }

    SureClick() {
        console.log('ok');
    }
/*    uploadImg(event) {
        const  file = event.srcElement.files[0];
        if (file) {
            if ( file.type && !/image/i.test(file.type)) {
                return false;
            }
            const reader = new FileReader();
            const windowURL = window.URL;
            const dataURL = windowURL.createObjectURL(file);
            this.imgsrc = dataURL; // 获取上传的图片临时路径
        }
    }*/
}
