import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../../_services/info.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [InfoService]
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private infoservice: InfoService, private router: Router) {
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      age: [null, Validators.required],
      famille: [null, Validators.required],
      race: [null, Validators.required],
      nourriture: [null, Validators.required]
    });
  }

  createInfo() {
    var age = this.angForm.value.age;
    var famille = this.angForm.value.famille;
    var race = this.angForm.value.race;
    var nourriture = this.angForm.value.nourriture;
    this.infoservice.createInfo(age, famille, race, nourriture);
    this.router.navigate(['/profil/index']);
    window.location.reload();
  }
}
