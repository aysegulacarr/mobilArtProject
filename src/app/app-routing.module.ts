import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {canActivate, redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard'

const routes: Routes = [
  
  {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
 },
    
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
