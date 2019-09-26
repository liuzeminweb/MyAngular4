import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signup-photo',
  templateUrl: './signup-photo.page.html',
  styleUrls: ['./signup-photo.page.scss'],
})
export class SignupPhotoPage implements OnInit {
  imgsrc = '';
  logoImg = '';
  showLoginM = false;
  showkefuM = false;
  bz1 = true;
  bz2 = false;
  bz3 = false;
  submitShow = false;
  logoImgShow = {
      left :  '-999px',
      top :  '-999px',
  }
  mhblur = '';
  imgStyle = {
      top : '0px',
      left : '0px',
      width :  'auto',
      height : 'auto',
      position : 'relative',
  }
  constructor( public _d: DomSanitizer) {
  }

  ngOnInit() {
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
    showBz3( ) {
        const showImg = document.getElementById("showImg");
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
    dmFunction(data , event) {
      if ( data  == 'null' ) {
          this.logoImgShow = {
              left :  '-999px',
              top :  '-999px',
          };
          this.logoImg = '';
      } else {
          this.logoImgShow = {
              left :  '30px',
              top :  '30px',
          };
          console.log( event.target.attributes.src.value);
          this.logoImg = event.target.attributes.src.value;
      }
    }
    uploadImg(event) {
        const  file = event.srcElement.files[0];
        if (file) {
            if ( file.type && !/image/i.test(file.type)) {
                return false;
            }
            const reader = new FileReader();
            const windowURL = window.URL;
            const dataURL = windowURL.createObjectURL(file);
            this.imgsrc = dataURL; // 获取上传的图片临时路径
            this.bz1 = false;
            this.bz2 = true;
            /*console.log(this);
            console.log(this._d.bypassSecurityTrustUrl(this.imgsrc));*/
        }
    }
    banckFunction(){
        history.back();
    }
    goNext(){
        this.showLoginM = true;
    }
    rpostFunction(){
        this.showLoginM = false;
        this.showkefuM = true;
    }
/*    dealImage(path, obj, callback){
        var img = new Image();
        img.src = path;
        img.onload = function(){
            var that = this;
            // 默认按比例压缩
            var w = that.width,
                h = that.height,
                scale = w / h;
            w = obj.width || w;
            h = obj.height || (w / scale);
            var quality = 0.7;  // 默认图片质量为0.7
            //生成canvas
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            // 创建属性节点
            var anw = document.createAttribute("width");
            anw.nodeValue = w;
            var anh = document.createAttribute("height");
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(that, 0, 0, w, h);
            // 图像质量
            if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                quality = obj.quality;
            }
            // quality值越小，所绘制出的图像越模糊
            var base64 = canvas.toDataURL('image/jpeg', quality );
            // 回调函数返回base64的值
            callback(base64);
        }
    }*/
}
