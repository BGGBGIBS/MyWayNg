import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {
    path:'',
    component:LearnComponent,
    children:[
      {
        path: 'maths',
        loadChildren: () =>
          import('./maths/maths.module').then((m) => m.MathsModule),
      },
      {
        path: 'algo',
        loadChildren:()=> import('./algo/algo.module').then((m)=>m.AlgoModule),
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnRoutingModule {}
