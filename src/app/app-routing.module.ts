import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modeGuard } from './shared/guards/mode.guard';
import { HomeComponent } from './features/home/pages/home/home.component';
import { PortfolioComponent } from './features/portfolio/pages/portfolio/portfolio.component';
import { ResumeComponent } from './features/resume/pages/resume/resume.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  // ✅ 404 primero (FUERA del guard)
  {
    path: '404',
    component: NotFoundComponent
  },

  // ✅ rutas con mode
  {
    path: ':mode',
    canActivate: [modeGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // ✅ wildcard al final
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
