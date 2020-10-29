import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
    ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
