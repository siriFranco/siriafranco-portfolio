import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';
import { SoftwareComponent } from './pages/software/software.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'architecture',
    component: ArchitectureComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}