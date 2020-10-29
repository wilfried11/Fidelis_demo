import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { NewProgrammeComponent } from './new-programme/new-programme.component';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { RegisterComponent } from './register/register.component';
  

const viewsRoutes: Routes = [
  { path: 'welcome', redirectTo: '/home' },
  { path: 'programme-details/:pgrm_loyal_ID', redirectTo: '/programme/:pgrm_loyal_ID' },
  { path: 'home',  component: ProgrammesComponent, data: { animation: 'welcome' } },
  { path: 'programme/:pgrm_loyal_ID', component: ProgrammeDetailsComponent, data: { animation: 'programme-details' } },
  {
    path: 'new_programme',
    component: NewProgrammeComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(viewsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})

export class ViewsRoutingModule {
}
