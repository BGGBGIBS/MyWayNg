import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { FounderComponent } from './founder/founder.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      { path: 'project', component: ProjectComponent },
      // { path: 'founder', component: FounderComponent },
      {path: 'way', loadChildren:() => import('../way/way.module').then((m)=> m.HomeModule)},
      { path: 'token', loadChildren:()=> import('./token/token.module').then((m)=>m.TokenModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
