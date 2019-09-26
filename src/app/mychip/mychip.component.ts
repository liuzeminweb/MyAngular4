import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mychip',
  templateUrl: './mychip.component.html',
  styleUrls: ['./mychip.component.scss']
})
export class MychipComponent implements OnInit {
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
