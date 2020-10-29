import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  validatingLogoinForm: FormGroup;
  validatingSigUpForm: FormGroup;

  ngOnInit() {
    this.validatingLogoinForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });

    this.validatingSigUpForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
  }

  get loginFormModalEmail() {
    return this.validatingLogoinForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingLogoinForm.get('loginFormModalPassword');
  }

  get signupFormModalName() {
    return this.validatingSigUpForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingSigUpForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingSigUpForm.get('signupFormModalPassword');
  }

}
