import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  addContact(login) {
    const contact = {
      login: login,
      password: ''
    };
    this.http.post(`${environment.apiBaseUrl}/addContact`, contact).subscribe(res =>
      console.log(res)
    );
  }

  deleteContact(login) {
    const contact = {
      login: login,
      password: ''
    };
    this.http.post(`${environment.apiBaseUrl}/deleteContact`, contact).subscribe(res =>
      console.log(res)
    );
  }

  getContact() {
    return this.http.get(`${environment.apiBaseUrl}/getContact`);
  }

  getUser() {
    return this.http.get(`${environment.apiBaseUrl}/getUser`);
  }
}
