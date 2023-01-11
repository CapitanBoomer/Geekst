import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Cipher } from 'crypto';
import { MenusComponent } from './componentes/menus/menus.component';

import { GuardianpruebaGuard } from './guardianprueba.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/User/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/User/register/register.module').then(m => m.RegisterPageModule)
  },
  {
path:'menus',
component:MenusComponent,
children:[{
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
      canActivate: [GuardianpruebaGuard]

    } , {
      path: 'info',
      loadChildren: () => import('./pages/info-pelicula/info-pelicula.module').then(m => m.InfoPeliculaPageModule)
    },]
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
