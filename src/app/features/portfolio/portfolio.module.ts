import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';
import { SoftwareComponent } from './pages/software/software.component';
import { UxProjectsComponent } from './pages/ux-projects/ux-projects.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectCardComponent,
    FilterBarComponent,
    ArchitectureComponent,
    SoftwareComponent,
    UxProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
