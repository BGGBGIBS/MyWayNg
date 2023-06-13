import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login/login.guard';
import { AdminGuard } from './guards/admin/admin.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    title: 'About',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'cv',
    title: 'CV',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: 'ares',
    title: 'ARES',
    loadChildren: () => import('./ares/ares.module').then((m) => m.AresModule),
  },
  {
    path: 'learn',
    title: 'Learn',
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'user',
    title: 'Users',
    canActivate: [AdminGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'in',
    title: 'In',
    loadChildren: () => import('./in/in.module').then((m) => m.InModule),
  },
  {
    path: 'pay',
    title: 'Pay',
    loadChildren: () => import('./pay/pay.module').then((m) => m.PayModule),
  },
  {
    path: 'redirect',
    title: 'Redirect',
    loadChildren: () =>
      import('./redirect/redirect.module').then((m) => m.RedirectModule),
  },
  {
    path: '**',
    title: 'Not found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];
export const navLinks = [
  {
    path: '',
    title: 'Home',
    logo: 'assets/img/logo-home.svg',
    loadChildren: () => import('./way/way.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    title: 'About',
    logo: 'assets/img/logo-home.svg',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'cv',
    title: 'CV',
    logo: 'assets/img/logo-cv.svg',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: 'ares',
    title: 'Ares',
    logo: 'assets/img/logo-gateway.svg',
    loadChildren: () => import('./ares/ares.module').then((m) => m.AresModule),
  },
  {
    path: 'learn',
    title: 'Learn',
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'user',
    title: 'Users',
    logo: 'assets/img/logo-user.svg',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'in',
    title: 'In',
    logo: 'assets/img/logo-in.svg',
    loadChildren: () => import('./in/in.module').then((m) => m.InModule),
  },
  {
    path: 'pay',
    title: 'Pay',
    loadChildren: () => import('./pay/pay.module').then((m) => m.PayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
