import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
@Component({
  templateUrl: './profil.component.html',
  providers: [AuthService]
})
export class ProfilComponent implements OnInit {
  constructor(private authservice: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  deconnexion() {
    this.authservice.deconnexion().subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }
}
