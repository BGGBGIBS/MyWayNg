import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WayComponent } from './way/way.component';

const routes: Routes = [
  {path:'', component: WayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
