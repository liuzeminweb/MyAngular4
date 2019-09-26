import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseinfoInfoPage } from './baseinfo-info.page';
/*import { MychipTowComponent } from '../mychip2/mychip.component';*/
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: BaseinfoInfoPage }])
    ],
    declarations: [BaseinfoInfoPage/*, MychipTowComponent*/]
})
export class BaseinfoInfoPageModule {}
