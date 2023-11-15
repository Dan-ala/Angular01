import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'

const routes: Routes = [
  {path :'', component:LoginComponent},
  {path :'signup', component:RegistrarComponent},
  {path : 'dashboard', component: DashboardComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
