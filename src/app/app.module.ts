import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './modules/forms/components/contact-form/contact-form.component';
import { LoginFormComponent } from './modules/forms/components/login-form/login-form.component';
import { ContactFormPageComponent } from './modules/forms/pages/contact-form-page/contact-form-page.component';
import { LoginFormPageComponent } from './modules/forms/pages/login-form-page/login-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    LoginFormComponent,
    ContactFormPageComponent,
    LoginFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
