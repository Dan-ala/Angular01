import { JournalistComponent } from './journalist/journalist.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EngineerComponent } from './engineer/engineer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { PilotComponent } from './pilot/pilot.component';

const routes: Routes = [
  {path :'', component:LoginComponent},
  {path :'signup', component:RegistrarComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'engineer', component: EngineerComponent},
  {path: 'journalist', component: JournalistComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'pilot', component: PilotComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
