import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'main', component: MainComponent},
  {path: '', /*component: AppComponent, */ redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
