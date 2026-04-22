import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { WorkExperienceComponent } from './pages/workExperience/workExperience.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    ResumeComponent,
    CertificationsComponent,
    WorkExperienceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
