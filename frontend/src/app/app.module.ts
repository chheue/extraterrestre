import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './_routes/routes';

import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateComponent } from './profil/info/create/create.component';
import { EditComponent } from './profil/info/edit/edit.component';
import { IndexComponent } from './profil/info/index/index.component';
import { ContactComponent } from './contact/contact.component';

import { InfoService } from './_services/info.service';
import { ContactService } from './_services/contact.service';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProfilComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [InfoService, ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
