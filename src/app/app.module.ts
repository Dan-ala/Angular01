import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './doctor/doctor.component';
import { EngineerComponent } from './engineer/engineer.component';
import { JournalistComponent } from './journalist/journalist.component';
import { TeacherComponent } from './teacher/teacher.component';
import { PilotComponent } from './pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    DashboardComponent,
    AdminDashboardComponent,
    DriverComponent,
    DoctorComponent,
    EngineerComponent,
    JournalistComponent,
    TeacherComponent,
    PilotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
