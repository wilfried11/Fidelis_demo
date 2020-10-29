import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgrammeDetailsComponent } from './views/programme-details/programme-details.component';


const appRoutes: Routes = [
  {
    path: 'programme-details',
    component: ProgrammeDetailsComponent
  },
  { path: '', redirectTo:'/home',pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
