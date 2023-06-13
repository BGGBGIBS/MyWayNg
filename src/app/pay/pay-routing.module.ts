import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {
    path: '',
    component: PayComponent,
    children: [
      { path: '', redirectTo: 'paypal', pathMatch: 'full' },
      {
        path: 'paypal',
        loadChildren: () =>
          import('./paypal/paypal.module').then((m) => m.PaypalModule),
      },
      {
        path: 'vivawallet',
        loadChildren: () =>
          import('./paypal/paypal.module').then((m) => m.PaypalModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayRoutingModule {}
