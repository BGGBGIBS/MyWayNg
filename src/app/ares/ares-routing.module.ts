import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AresComponent } from './ares/ares.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { GradesComponent } from './grades/grades.component';
import { PasserellesComponent } from './passerelles/passerelles.component';

const routes: Routes = [
  {
    path: '',
    component: AresComponent,
    children: [
      { path: '', redirectTo: 'institution', pathMatch: 'full' },
      { path: 'institution', component: InstitutionsComponent },
      { path: 'grade', component: GradesComponent },
      { path: 'passerelle', component: PasserellesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AresRoutingModule {}
