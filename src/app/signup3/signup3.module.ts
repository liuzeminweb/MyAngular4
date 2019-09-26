import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Signup3Page } from './signup3.page';
import { MychipComponent } from '../mychip/mychip.component';
const routes: Routes = [
  {
    path: '',
    component: Signup3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Signup3Page, MychipComponent]
})
export class Signup3PageModule {}
