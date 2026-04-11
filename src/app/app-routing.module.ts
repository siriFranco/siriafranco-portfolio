import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },

  {
    path: 'portfolio',
    loadChildren: () =>
      import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./features/resume/resume.module').then(m => m.ResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
