import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },

  
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses-routing.module').then(m => m.CoursesRoutingModule)
  },

  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms-routing.module').then(m => m.FormsRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
