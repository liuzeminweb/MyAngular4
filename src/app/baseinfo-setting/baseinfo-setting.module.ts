import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseinfoSettingPageRoutingModule } from './baseinfo-setting.router.module';
import { BaseinfoSettingPage } from './baseinfo-setting.page';


@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      BaseinfoSettingPageRoutingModule,
  ],
  declarations: [BaseinfoSettingPage]
})
export class BaseinfoSettingPageModule {}
