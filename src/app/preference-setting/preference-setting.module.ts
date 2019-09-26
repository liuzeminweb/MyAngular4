import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreferenceSettingPage } from './preference-setting.page';
import { MychipTreeComponent } from '../mychip3/mychip.component';
const routes: Routes = [
  {
    path: '',
    component: PreferenceSettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreferenceSettingPage, MychipTreeComponent]
})
export class PreferenceSettingPageModule {}
