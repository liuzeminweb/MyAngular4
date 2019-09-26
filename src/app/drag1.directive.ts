import {  Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrag1]'
})
export class Drag1Directive implements OnInit {

    constructor(public el: ElementRef) {
    }
    public isDown = false;

    public disX; // 记录鼠标点击事件的位置 X

    public disY; // 记录鼠标点击事件的位置 Y
    parentNodeWidth = '';
    parentNodeHeight = '';
    nodeWidth = '';
    nodeHeight = ';'
    private totalOffsetX = 0; // 记录总偏移量 X轴
    private totalOffsetY = 0; // 记录总偏移量 Y轴

    // 点击事件
    @HostListener('mousedown', ['$event']) onMousedown(event) {
        event.preventDefault();
        this.isDown = true;
        this.disX = event.clientX;
        this.disY = event.clientY;
    }
    @HostListener('touchstart', ['$event']) touchstart(event) {
        event.preventDefault();
        this.isDown = true;
        this.disX = event.changedTouches[0].clientX;
        this.disY = event.changedTouches[0].clientY;
        this.nodeHeight = this.el.nativeElement.offsetHeight;
        this.nodeWidth = this.el.nativeElement.offsetWidth;
        this.parentNodeHeight = this.el.nativeElement.parentNode.offsetHeight;
        this.parentNodeWidth = this.el.nativeElement.parentNode.offsetWidth;
        /* console.log(this.parentNodeHeight);
         console.log(this.parentNodeWidth);
         console.log(this.nodeHeight);
         console.log(this.nodeWidth);*/
    }
    // 监听document移动事件事件
    @HostListener('document:mousemove', ['$event']) onMousemove(event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            this.el.nativeElement.style.left = this.totalOffsetX + event.clientX - this.disX + 'px';
            this.el.nativeElement.style.top = this.totalOffsetY + event.clientY - this.disY + 'px';
        }
    }
    @HostListener('touchmove', ['$event']) touchmove(event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            const x = this.totalOffsetX + event.touches[0].clientX - this.disX;
            const y = this.totalOffsetY + event.touches[0].clientY - this.disY;
            let xP = x;
            let yP = y;
            const widthC =  Math.abs(parseFloat(this.parentNodeWidth) - parseFloat(this.nodeWidth));
            const heightC =  Math.abs(parseFloat(this.parentNodeHeight) - parseFloat(this.nodeHeight));
            if ( x <=  0 ) {
                xP =  0 ;
            } else if (x >=  widthC) {
                xP =  widthC;
            }
            if ( y <=  0  ) {
                yP =   0 ;
            } else if (y > heightC ) {
                yP = heightC;
            }
            this.el.nativeElement.style.left = xP + 'px';
            this.el.nativeElement.style.top = yP + 'px';
        }
    }
    // 监听document离开事件
    @HostListener('document:mouseup', ['$event']) onMouseup(event) {
      //  event.preventDefault();
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            console.log('fail');
            this.totalOffsetX += event.clientX - this.disX;
            this.totalOffsetY += event.clientY - this.disY;
            this.isDown = false;
        }
    }
    @HostListener('document:touchend', ['$event']) touchend(event) {
        // 只用当元素移动过了，离开函数体才会触发。
       // event.preventDefault();
        if (this.isDown) {
            console.log('fail');
            this.totalOffsetX += event.changedTouches[0].clientX - this.disX;
            this.totalOffsetY += event.changedTouches[0].clientY - this.disY;
            this.isDown = false;
        }
    }
    ngOnInit() {
        this.el.nativeElement.style.position = 'absolute';
    }

}
