import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Info } from '../../../_models/info.model';
import { Router } from '@angular/router';
import { InfoService } from '../../../_services/info.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [InfoService]
})
export class EditComponent implements OnInit {
  angForm: FormGroup;
  info: Info[] = [];
  constructor(private fb: FormBuilder, private router: Router, private infoservice: InfoService) { }

  ngOnInit() {
    this.infoservice.getInfo().subscribe(res => {
      console.log(res[0]);
      this.info = res[0];
    });;
    this.angForm = this.fb.group({
      age: [""],
      famille: [""],
      race: [""],
      nourriture: [""]
    });
  }

  updateInfo() {
    var age = this.angForm.value.age;
    var famille = this.angForm.value.famille;
    var race = this.angForm.value.race;
    var nourriture = this.angForm.value.nourriture;
    this.infoservice.updateInfo(age, famille, race, nourriture);
    this.router.navigate(['/profil/index']);
    window.location.reload();
  }
}
