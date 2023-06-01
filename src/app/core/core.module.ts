import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TopperComponent } from './topper/topper.component';
import { ConnectedComponent } from './connected/connected.component';
import { LogoComponent } from './logo/logo.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    TopperComponent,
    ConnectedComponent,
    LogoComponent,
    NavLogoComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    TopperComponent,
    ConnectedComponent,
    LogoComponent,
    NavLogoComponent
  ]
})
export class CoreModule { }
