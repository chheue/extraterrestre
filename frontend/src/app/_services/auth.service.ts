import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  signUpUser(login, password) {
    const user = {
      login: login,
      password: password
    }
    this.http.post(`${environment.apiBaseUrl}/inscription`, user)
      .subscribe(res => {
        console.log(res)
      });
  }
  loginUser(login, password) {
    const user = {
      login: login,
      password: password
    }
    this.http.post(`${environment.apiBaseUrl}/connexion`, user)
      .subscribe(res => {
        console.log(res)
      });
  }

  deconnexion() {
    return this.http.get(`${environment.apiBaseUrl}/deconnexion`);
  }
}
