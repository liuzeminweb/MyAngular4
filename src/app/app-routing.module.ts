import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    data : { reuse : true, keep : false}
  },
  /*{
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
  },
  {
    path: 'detail/:id',
    loadChildren: './detail/detail.module#DetailPageModule',
  },
  {
    path: 'edit/:id',
    loadChildren: './edit/edit.module#EditPageModule',
  },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' , data : { reuse : true , keep : false}},*/
  { path: 'findList', loadChildren: './find-list/find-list.module#FindListPageModule', data : { reuse : true, keep : false} },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' , data : { reuse : true, keep : false}},
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule', data : { reuse : true, keep : false}},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'forgetPassword', loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule' },
  { path: 'usersetting', loadChildren: './usersetting/usersetting.module#UsersettingPageModule' },
  { path: 'signup2', loadChildren: './signup2/signup2.module#Signup2PageModule' },
  { path: 'signup3', loadChildren: './signup3/signup3.module#Signup3PageModule' },
  /*{ path: 'baseinfoSetting', loadChildren: './baseinfo-setting/baseinfo-setting.module#BaseinfoSettingPageModule' },*/
  { path: 'preferenceSetting', loadChildren: './preference-setting/preference-setting.module#PreferenceSettingPageModule' },
  { path: 'userinfoSetting', loadChildren: './userinfo-setting/userinfo-setting.module#UserinfoSettingPageModule' },
  { path: 'iFlopWho', loadChildren: './i-flop-who/i-flop-who.module#IFlopWhoPageModule' },
  { path: 'whoFlopMe', loadChildren: './who-flop-me/who-flop-me.module#WhoFlopMePageModule' },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' },
  { path: 'signupPhoto', loadChildren: './signup-photo/signup-photo.module#SignupPhotoPageModule' },
  { path: 'rname', loadChildren: './rname/rname.module#RnamePageModule' },
  { path: 'phoneYz', loadChildren: './phone-yz/phone-yz.module#PhoneYzPageModule' },
  { path: 'infoSetting', loadChildren: './info-setting/info-setting.module#InfoSettingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
