import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPhotoPage } from './signup-photo.page';
import { AppDragDirective } from '../app-drag.directive';
import { DragDirective } from '../drag.directive';

const routes: Routes = [
  {
    path: '',
    component: SignupPhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPhotoPage, AppDragDirective, DragDirective]
})
export class SignupPhotoPageModule {}
