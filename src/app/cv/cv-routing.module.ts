import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { LoginGuard } from '../guards/login/login.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { GetCvComponent } from './get-cv/get-cv.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[LoginGuard],
    component: CvComponent,
    children: [
      {path: '', component: GetCvComponent},
      { path: 'add', component: AddCvComponent },
      { path: 'update', component: UpdateCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
