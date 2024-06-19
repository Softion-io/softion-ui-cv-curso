import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LanguagesComponent } from './components/languages/languages.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'personal-data', component: PersonalDataComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'languages', component: LanguagesComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
