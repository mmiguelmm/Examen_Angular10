import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ContactFormPageComponent } from './pages/contact-form-page/contact-form-page.component';

import {HeaderComponent} from '../layout/components/header/header.component';


@NgModule({
  declarations: [

    ContactFormPageComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
