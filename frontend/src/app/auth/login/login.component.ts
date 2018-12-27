import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  templateUrl: 'login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authservice: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  loginUser() {
    var login = this.loginForm.value.login;
    var password = this.loginForm.value.password;
    this.authservice.loginUser(login, password);
    this.router.navigate(['insertInfo']);
  }
}
