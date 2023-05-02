import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HeaderSideComponent } from './header-side-layout/header-side.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HeaderSideComponent,
    children: [
      { 
        path: 'pages/home', 
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      { 
        path: 'pages/projetos', 
        loadChildren: () => import('../pages/projetos/projetos.module').then(m => m.ProjetosModule)
      },   
      { 
        path: 'pages/profile', 
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule)
      },        
      { 
        path: 'pages/solicitacoes', 
        loadChildren: () => import('../pages/solicitacoes/solicitacoes.module').then(m => m.SolicitacoesModule)
      },  
      { 
        path: 'pages/voluntarios', 
        loadChildren: () => import('../pages/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'auth/login', 
        loadChildren: () => import('../auth/login/login.module').then(m => m.LoginModule)
      },
      { 
        path: 'auth/recovery', 
        loadChildren: () => import('../auth/recoverPassword/recoveryPassword.module').then(m => m.RecoverPasswordModule)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { 
        path: 'home', 
        loadChildren: () => import('../pages/landingPage/landingPage.module').then(m => m.LandingPageModule)
      },  
      { 
        path: 'multiplicker', 
        loadChildren: () => import('../pages/multiplicker/multiplicker.module').then(m => m.MultiplickerModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }