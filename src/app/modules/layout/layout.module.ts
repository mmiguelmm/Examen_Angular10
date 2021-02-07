import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';

//Componetes Reutilizable//
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//
import { CourseListPageComponent} from '../courses/pages/course-list-page/course-list-page.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    CourseListPageComponent,
    LayoutComponent, 
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

  ]
})
export class LayoutModule { }
