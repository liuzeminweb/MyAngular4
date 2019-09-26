import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindListPage } from './find-list.page';
import { FindCartComponent } from '../find-cart/find-cart.component';
import { FindSerachComponent } from '../find-serach/find-serach.component';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
const routes: Routes = [
  {
    path: '',
    component: FindListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindListPage, FindCartComponent, FindSerachComponent, CheckboxGroupComponent]
})
export class FindListPageModule {}
