import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modeGuard } from './shared/guards/mode.guard';
import { HomeComponent } from './features/home/pages/home/home.component';
import { PortfolioComponent } from './features/portfolio/pages/portfolio/portfolio.component';
import { ResumeComponent } from './features/resume/pages/resume/resume.component';

const routes: Routes = [
  {
    path: ':mode',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
