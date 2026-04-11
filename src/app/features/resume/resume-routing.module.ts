import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: ':type', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
