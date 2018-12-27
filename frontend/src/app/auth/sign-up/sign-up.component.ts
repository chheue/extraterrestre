import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authservice: AuthService, private fb: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.signUpForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  signUpUser() {
    var login = this.signUpForm.value.login;
    var password = this.signUpForm.value.password;
    this.authservice.signUpUser(login, password);
    this.router.navigate(['login']);
  }
}
