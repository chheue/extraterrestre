import { Routes } from '@angular/router';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { LoginComponent } from '../auth/login/login.component';
import { CreateComponent } from '../profil/info/create/create.component';
import { EditComponent } from '../profil/info/edit/edit.component';
import { IndexComponent } from '../profil/info/index/index.component';
import { ContactComponent } from '../contact/contact.component';
import { ProfilComponent } from '../profil/profil.component';

export const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'insertInfo', component: CreateComponent
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'profil', component: ProfilComponent,
    children: [{ path: 'index', component: IndexComponent },{ path: 'contact', component: ContactComponent }
                
    ]
  }
];
