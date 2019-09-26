import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhoFlopMePage } from './who-flop-me.page';

const routes: Routes = [
  {
    path: '',
    component: WhoFlopMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WhoFlopMePage]
})
export class WhoFlopMePageModule {}
