import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoSettingPage } from './info-setting.page';
import { MychipTowComponent } from '../mychip2/mychip.component';
import { AppDrag1Directive } from '../app-drag1.directive';
import { Drag1Directive } from '../drag1.directive';
const routes: Routes = [
  {
    path: '',
    component: InfoSettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoSettingPage, MychipTowComponent, AppDrag1Directive, Drag1Directive]
})
export class InfoSettingPageModule {}
