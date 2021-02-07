import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactFormPageComponent} from './pages/contact-form-page/contact-form-page.component';

import {LoginFormPageComponent} from './pages/login-form-page/login-form-page.component';


const routes: Routes = [

  {
    path: 'contact-form',
    component: ContactFormPageComponent
  },

  {
    path: 'login-form',
    component: LoginFormPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
