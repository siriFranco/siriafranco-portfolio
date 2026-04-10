import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectCardComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
