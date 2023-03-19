import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientService } from './services/patient.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpecialtysComponent } from './pages/specialtys/specialtys.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SpecialtysComponent,
    SpecialtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
