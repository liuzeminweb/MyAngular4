import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mychipTow',
  templateUrl: './mychip.component.html',
  styleUrls: ['./mychip.component.scss']
})
export class MychipTowComponent implements OnInit {
    thisOn = false;
    thisClass = '';
    myStyle = {};
   @Input() text;
   @Input() isOn;
   @Input() isStyle;
   @Input() isClass;
  constructor() { }

  ngOnInit() {
      this.thisOn = this.isOn;
      this.myStyle = this.isStyle;
      this.thisClass = this.isClass;
  }
    changeChecked() {
      this.thisOn = ! this.thisOn;
    }
}
