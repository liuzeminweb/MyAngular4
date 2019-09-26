import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  ngIsShow = false;
  checkearall = false;
  SellectArr = [{
      value : 'a1',
      checked : false,
  },
      {
          value : 'a2',
          checked : false,
      } ];
  constructor() { }

  ngOnInit() {
  }
    ngShowthis() {
        this.ngIsShow = ! this.ngIsShow;
    }
    sellectAll() {
      console.log(1111);
        this.checkearall = !this.checkearall;
        this.SellectArr.forEach(option => {
                option.checked = this.checkearall;
            });
    }
}
