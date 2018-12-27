import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class InfoService {

  constructor(private http: HttpClient) {
  }
  getInfo() {
    return this.http.get(`${environment.apiBaseUrl}/getData`);
  }
  createInfo(age, famille, race, nourriture) {
    const info = {
      age: age,
      famille: famille,
      race: race,
      nourriture: nourriture
    }
    this.http.post(`${environment.apiBaseUrl}/info`, info).subscribe(res =>
      console.log(res)
    );
  }
  updateInfo(age, famille, race, nourriture) {
    const info = {
      age: age,
      famille: famille,
      race: race,
      nourriture: nourriture
    }
    this.http.post(`${environment.apiBaseUrl}/updateInfo`, info).subscribe(res =>
      console.log(res)
    );
  }
}
