import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-cinco-passos-de-voce',
    loadChildren: () => import('./a-cinco-passos-de-voce/a-cinco-passos-de-voce.module').then( m => m.ACincoPassosDeVocePageModule)
  },
  {
    path: 'a-era-de-ultron',
    loadChildren: () => import('./a-era-de-ultron/a-era-de-ultron.module').then( m => m.AEraDeUltronPageModule)
  },
  {
    path: 'vingadores-ultimato',
    loadChildren: () => import('./vingadores-ultimato/vingadores-ultimato.module').then( m => m.VingadoresUltimatoPageModule)
  },
  {
    path: 'minions-a-origem',
    loadChildren: () => import('./minions-a-origem/minions-a-origem.module').then( m => m.MinionsAOrigemPageModule)
  },
  {
    path: 'viuva-negra',
    loadChildren: () => import('./viuva-negra/viuva-negra.module').then( m => m.ViuvaNegraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
