import { Component, OnInit } from '@angular/core';
import { Contact } from '../_models/contact.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../_services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  userList: Contact[] = [];
  contactList: Contact[] = [];
  angForm: FormGroup;

  constructor(private contactservice: ContactService, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.getInfo();
    this.angForm = this.fb.group({
      login: [''],
      password: ['']
    });
    this.getContact();
  }

  addContact() {
    var login = this.angForm.value.login;
    this.contactservice.addContact(login);
    window.location.reload();
  }

  deleteContact() {
    var login = this.angForm.value.login;
    this.contactservice.deleteContact(login);
    window.location.reload();
  }

  getContact() {
    this.contactservice.getContact().subscribe((res: Contact[]) =>
      this.contactList = res
    );
  }

  getInfo() {
    this.contactservice.getUser().subscribe((res: Contact[]) =>
      this.userList = res
    );
  }
}
