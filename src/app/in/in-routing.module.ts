import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInComponent } from './form-in/form-in.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { FormQuitComponent } from './form-quit/form-quit.component';

const routes: Routes = [
  {
    path: '',
    component: FormInComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: FormLoginComponent },
      { path: 'signup', component: FormSigninComponent },
      { path: 'quit', component: FormQuitComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InRoutingModule {}
