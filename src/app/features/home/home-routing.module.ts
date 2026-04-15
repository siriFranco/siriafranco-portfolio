import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('../resume/resume.module').then(m => m.ResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class HomeRoutingModule {}