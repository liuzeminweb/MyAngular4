import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseinfoPhotoPage } from './baseinfo-photo.page';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: BaseinfoPhotoPage }])
    ],
    declarations: [BaseinfoPhotoPage]
})
export class BaseinfoPhotoPageModule {}
