import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modeGuard } from './shared/guards/mode.guard';
import { HomeComponent } from './features/home/pages/home/home.component';
import { PortfolioComponent } from './features/portfolio/pages/portfolio/portfolio.component';
import { ResumeComponent } from './features/resume/pages/resume/resume.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [

  {
    path: '404',
    component: NotFoundComponent
  },

  // 🔥 MÁS ESPECÍFICAS PRIMERO
  {
    path: ':mode/portfolio',
    canActivate: [modeGuard],
    loadChildren: () =>
      import('./features/portfolio/portfolio.module')
        .then(m => m.PortfolioModule)
  },

  {
    path: ':mode/resume',
    canActivate: [modeGuard],
    loadChildren: () =>
      import('./features/resume/resume.module')
        .then(m => m.ResumeModule)
  },

  {
    path: ':mode',
    canActivate: [modeGuard],
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',          // 🔥 clave
      scrollPositionRestoration: 'enabled' // 🔥 opcional pero recomendado
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
