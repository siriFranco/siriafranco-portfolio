import { Component } from '@angular/core';
import { UX_PROJECTS, Project } from '../config/ux-projects.config';

@Component({
  selector: 'app-ux-projects',
  templateUrl: './ux-projects.component.html',
  styleUrls: ['./ux-projects.component.scss']
})
export class UxProjectsComponent {

  projects: Project[] = UX_PROJECTS;

}