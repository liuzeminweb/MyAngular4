import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-info-setting',
  templateUrl: './info-setting.page.html',
  styleUrls: ['./info-setting.page.scss'],
})
export class InfoSettingPage implements OnInit {
    photoShow = true;
    privacyShow = false;
    settingShow = false;
    kefuModelShow = false;
    phoneErrModelShow = false;
    ycErrModelShow = false;
    isOn = false;
    pepperoni = false;
    dadShow = true;
    imgsrc1 = '../../assets/imgs/17yera.png';
    show1 = false;
    logoImgShow1 = {
        left :  '-999px',
        top :  '-999px',
        width :  '41px',
        height : '41px',
    };
    logoImg1 = '';
    mhblur1 = '';
    imgStyle1 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgsrc2 = '';
    show2 = true;
    logoImgShow2 = {
        left :  '-999px',
        top :  '-999px',
        width :  '21px',
        height : '21px',
    };
    logoImg2 = '';
    mhblur2 = '';
    imgStyle2 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgsrc3 = '';
    show3 = true;
    logoImgShow3 = {
    left :  '-999px',
    top :  '-999px',
    width :  '21px',
    height : '21px',
};
    logoImg3 = '';
    mhblur3 = '';
    imgStyle3 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgsrc4 = '';
    show4 = true;
    logoImgShow4 = {
        left :  '-999px',
        top :  '-999px',
        width :  '21px',
        height : '21px',
    };
    logoImg4 = '';
    mhblur4 = '';
    imgStyle4 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgsrc5 = '';
    show5 = true;
    logoImgShow5 = {
        left :  '-999px',
        top :  '-999px',
        width :  '21px',
        height : '21px',
    }
    logoImg5 = '';
    mhblur5 = '';
    imgStyle5 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgsrc6 = '';
    show6 = true;
    logoImgShow6 = {
        left :  '-999px',
        top :  '-999px',
        width :  '21px',
        height : '21px',
    }
    logoImg6 = '';
    mhblur6 = '';
    imgStyle6 = {
        top : '0px',
        left : '0px',
        width :  '100%',
        height : '100%',
        position : 'relative',
    };
    imgModelShow = false;
    bz2 = true;
    bz3 = false;
    submitShow = false;
    imgModelSrc = '';
    logoImg = '';
    myStyleS = {
        'width' : '62px',
    };
    logoImgShow = {
        left :  '-999px',
        top :  '-999px',
        width :  '52px',
        height : '52px',
    }
    mhblur = '';
    imgStyle = {
        top : '0px',
        left : '0px',
        width :  'auto',
        height : 'auto',
        position : 'relative',
    }
    imgNUMBER = 0;
    mychipList = [
        {
            text: '健身',
            isOn : false,
        },{
            text: '颜控',
            isOn : true,
        },{
            text: '土豪',
            isOn : false,
        },{
            text: '喝酒',
            isOn : false,
        },{
            text: '工作狂',
            isOn : true,
        },{
            text: '潮人',
            isOn : false,
        },{
            text: '吃货',
            isOn : true,
        },{
            text: '话痨',
            isOn : true,
        },{
            text: '闷骚',
            isOn : false,
        },{
            text: '铲屎官',
            isOn : false,
        }
    ]
    mychipList2 = [
        {
            text: '音乐',
            isOn : false,
        },{
            text: '看书',
            isOn : false,
        },{
            text: '电竞',
            isOn : false,
        },{
            text: '潮牌',
            isOn : true,
        },{
            text: '运动',
            isOn : true,
        },{
            text: '户外',
            isOn : false,
        },{
            text: '旅行',
            isOn : true,
        },{
            text: '夜店',
            isOn : false,
        },{
            text: '球鞋',
            isOn : true,
        },{
            text: '电影',
            isOn : false,
        },{
            text: '摄影',
            isOn : false,
        }
    ]
  constructor(public _d: DomSanitizer) { }

  ngOnInit() {
      $('.jq22').dad();
  }
    showErrModel($event) {
        this.ycErrModelShow = !this.ycErrModelShow;
    }
    showKefuuModel($event) {
        this.phoneErrModelShow = false;
        this.ycErrModelShow = false;
        this.kefuModelShow = !this.kefuModelShow;
    }
    showPhoneErrModel($event) {
        this.phoneErrModelShow  =  !this.phoneErrModelShow;
    }
    SureClick() {
        this.phoneErrModelShow  =  !this.phoneErrModelShow;
    }
    showModel() {
        this.pepperoni = !this.pepperoni;
        this.ycErrModelShow = !this.ycErrModelShow;
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
               /* this.imgsrc1 = dataURL;
                this.show1 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 1;
            } else if ( imgNumber == '2') {
                /*this.imgsrc2 = dataURL;
                this.show2 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 2;
            } else if ( imgNumber == '3') {
                /*this.imgsrc3 = dataURL;
                this.show3 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 3;
            } else if ( imgNumber == '4') {
               /* this.imgsrc4 = dataURL;
                this.show4 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 4;
            } else if ( imgNumber == '5') {
               /* this.imgsrc5 = dataURL;
                this.show5 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 5;
            } else if ( imgNumber == '6') {
               /* this.imgsrc6 = dataURL;
                this.show6 = false;*/
                this.imgModelSrc = dataURL;
                this.imgModelShow = true;
                this.imgNUMBER = 6;
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
    showBz3( ) {
        const showImg = document.getElementById("showImg");
       /* this.imgStyle.top = parseInt(showImg.style.top)/255;
        this.imgStyle.left = parseInt(showImg.style.left)/255
        this.imgStyle.width =  parseInt(showImg.style.width)/255;
        this.imgStyle.height = parseInt(showImg.style.height)/255;*/
        this.imgStyle.top = showImg.style.top;
        this.imgStyle.left =  showImg.style.left;
        this.imgStyle.width =  showImg.style.width;
        this.imgStyle.height = showImg.style.height
        this.bz2 = false;
        this.bz3 = true;
        this.submitShow = true;
    }
    mhFunction(data) {
        this.mhblur  = data;
    }
    fdFunction(event) {
        const showImg = document.getElementById("showImg");
        showImg.style.width = 2 * showImg.clientWidth + 'px';
        showImg.style.height = 2 * showImg.clientHeight + 'px';
    }
    sxFunction(event) {
        const showImg = document.getElementById("showImg");
        showImg.style.width =  showImg.clientWidth / 2 + 'px';
        showImg.style.height = showImg.clientHeight / 2 + 'px';
        showImg.style.top = 0 + 'px';
        showImg.style.left = 0 + 'px';
    }
    dmFunction(data , event) {
        if ( data  == 'null' ) {
            this.logoImgShow = {
                left :  '-999px',
                top :  '-999px',
                width :  '52px',
                height : '52px',
            };
            this.logoImg = '';
        } else {
             console.log( event.target.clientWidth);
            this.logoImgShow = {
                left :  '30px',
                top :  '30px',
                width :  '52px',
                height : '52px',
            };
            this.logoImg = event.target.attributes.src.value;
        }
    }
    QRXG() {
        const logoImg = document.getElementById("logoImg");
        console.log(logoImg.style.top)
        this.logoImgShow.top = logoImg.style.top;
        this.logoImgShow.left =logoImg.style.left;
        if ( this.imgNUMBER  ==  1 ) {
            this.imgsrc1 =  this.imgModelSrc;
            this.show1 = false;
            this.logoImg1 =  this.logoImg;
            this.mhblur1 = this.mhblur;
            this.logoImgShow1.width = '45px';
            this.logoImgShow1.height =  '45px';
           /* this.logoImgShow1.left = parseInt(this.logoImgShow.left)/255*216+"px";
            this.logoImgShow1.top = parseInt(this.logoImgShow.top)/255*216+"px";
            this.imgStyle1.width = parseInt(this.imgStyle.width)/255*216+"px";
            this.imgStyle1.height = parseInt(this.imgStyle.height)/255*216+"px";
            this.imgStyle1.top = parseInt(this.imgStyle.top)/255*216+"px";
            this.imgStyle1.left = parseInt(this.imgStyle.left)/255*216+"px"*/
            this.logoImgShow1.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow1.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle1.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle1.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle1.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle1.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        } else if ( this.imgNUMBER  == 2) {
            this.imgsrc2 =  this.imgModelSrc;
            this.show2 = false;
            this.logoImg2 =  this.logoImg;
            this.mhblur2 = this.mhblur;
            this.logoImgShow2.width = '45px';
            this.logoImgShow2.height =  '45px';
            this.logoImgShow2.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow2.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle2.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle2.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle2.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle2.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        } else if ( this.imgNUMBER  == 3) {
            this.imgsrc3 =  this.imgModelSrc;
            this.show3 = false;
            this.logoImg3 =  this.logoImg;
            this.mhblur3 = this.mhblur;
            this.logoImgShow3.width = '45px';
            this.logoImgShow3.height =  '45px';
            this.logoImgShow3.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow3.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle3.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle3.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle3.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle3.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        } else if ( this.imgNUMBER  == 4) {
            this.imgsrc4 =  this.imgModelSrc;
            this.show4 = false;
            this.logoImg4 =  this.logoImg;
            this.mhblur4 = this.mhblur;
            this.logoImgShow4.width = '45px';
            this.logoImgShow4.height =  '45px';
            this.logoImgShow4.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow4.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle4.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle4.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle4.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle4.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        } else if ( this.imgNUMBER  == 5) {
            this.imgsrc5 =  this.imgModelSrc;
            this.show5 = false;
            this.logoImg5 =  this.logoImg;
            this.mhblur5 = this.mhblur;
            this.logoImgShow5.width = '45px';
            this.logoImgShow5.height =  '45px';
            this.logoImgShow5.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow5.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle5.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle5.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle5.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle5.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        } else if ( this.imgNUMBER  == 6) {
            this.imgsrc6 =  this.imgModelSrc;
            this.show6 = false;
            this.logoImg6 =  this.logoImg;
            this.mhblur6 = this.mhblur;
            this.logoImgShow6.width = '45px';
            this.logoImgShow6.height =  '45px';
            this.logoImgShow6.left = (parseInt(this.logoImgShow.left)/205*100).toFixed(1)+'%';
            this.logoImgShow6.top = (parseInt(this.logoImgShow.top)/205*100).toFixed(1)+'%';
            this.imgStyle6.width = (parseInt(this.imgStyle.width)/205*100).toFixed(1)+'%';
            this.imgStyle6.height = (parseInt(this.imgStyle.height)/205*100).toFixed(1)+'%';
            this.imgStyle6.top = (parseInt(this.imgStyle.top)/205*100).toFixed(1)+'%';
            this.imgStyle6.left = (parseInt(this.imgStyle.left)/205*100).toFixed(1)+'%';
        }
        this.imgModelShow = false;
        this.bz2 = true;
        this.bz3 = false;
        this.submitShow =false;
    }
    photoSureClick() {
        console.log('ok');
    }
    showPhoneModel() {
        this.photoShow = true;
        this.privacyShow = false;
        this.settingShow = false;
    }
    showPrivacyModel() {
        this.photoShow = false;
        this.privacyShow = true;
        this.settingShow = false;
    }
    showInfoModel() {
        this.photoShow = false;
        this.privacyShow = false;
        this.settingShow = true;
    }
}
