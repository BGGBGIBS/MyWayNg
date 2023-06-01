import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserIdComponent } from './user-id/user-id.component';
import { AdminGuard } from '../guards/admin/admin.guard';
import { LoginGuard } from '../guards/login/login.guard';

const routes: Routes = [
  { path:'', canActivate:[AdminGuard], component:UserComponent},
  // { path:':id',canActivate:[LoginGuard], component:UserIdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
