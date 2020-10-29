import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTabPanelModule,DxScrollViewModule,DxDataGridModule,DxNumberBoxModule,DxButtonModule,DxTreeViewModule,DxValidatorModule,DxRangeSelectorModule } from 'devextreme-angular';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ViewsRoutingModule } from './views-routing.module';
import { NewProgrammeComponent } from './new-programme/new-programme.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MyStepperComponent } from './stepper/my_stepper/my_stepper.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ViewsRoutingModule,
    CdkStepperModule,
    DxTabPanelModule,
    DxScrollViewModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxTreeViewModule,
    DxValidatorModule,
    DxRangeSelectorModule
    ],
  declarations: [
    ProgrammeDetailsComponent,
    ProgrammesComponent,
    NewProgrammeComponent,
    LoginComponent,
    MyStepperComponent,
    RegisterComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    ProgrammeDetailsComponent,
    ProgrammesComponent
  ]
})
export class ViewsModule { }
