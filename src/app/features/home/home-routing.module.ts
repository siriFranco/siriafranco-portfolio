import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dev', component: HomeComponent },
  { path: 'arch', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class HomeRoutingModule {}