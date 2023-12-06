import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EngineerComponent } from './engineer/engineer.component';

const routes: Routes = [
  {path :'', component:LoginComponent},
  {path :'signup', component:RegistrarComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'engineer', component: EngineerComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
