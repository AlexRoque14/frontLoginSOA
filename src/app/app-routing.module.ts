import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { VuelosComprarComponent } from './vuelos-comprar/vuelos-comprar.component';
import { VuelosComponent } from './vuelos/vuelos.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'vuelos',
    component: VuelosComponent
  },
  {
    path:'comprar-Vuelo',
    component: VuelosComprarComponent
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
  ,{
    path: 'verification-email',
    component: SendEmailComponent
  },
  { path: 'password', loadChildren: () => import('./auth/password/password.module').then(m => m.PasswordModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
