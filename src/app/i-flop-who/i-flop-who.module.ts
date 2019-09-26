import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IFlopWhoPage } from './i-flop-who.page';

const routes: Routes = [
  {
    path: '',
    component: IFlopWhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IFlopWhoPage]
})
export class IFlopWhoPageModule {}
