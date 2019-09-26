import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseinfoSettingPage } from './baseinfo-setting.page';


const routes: Routes = [
  {
    path: '',
    component: BaseinfoSettingPage,
    children: [
        {
            path: 'tab1',
            children: [
                {
                    path: '',
                    loadChildren: '../baseinfo-photo/baseinfo-photo.module#BaseinfoPhotoPageModule'
                }
            ]
        },
        {
            path: 'tab2',
            children: [
                {
                    path: '',
                    loadChildren: '../baseinfo-privacy/baseinfo-privacy.module#BaseinfoPrivacyPageModule'
                }
            ]
        },
        {
            path: 'tab3',
            children: [
                {
                    path: '',
                    loadChildren: '../baseinfo-info/baseinfo-info.module#BaseinfoInfoPageModule'
                }
            ]
        },
        {
            path: '',
            redirectTo: '/baseinfoSetting/tab1',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseinfoSettingPageRoutingModule {}
