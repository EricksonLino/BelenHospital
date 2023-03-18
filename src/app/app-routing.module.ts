import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SpecialtysComponent } from './pages/specialtys/specialtys.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'patients', component: PatientsComponent},
  {path:'specialtys', component: SpecialtysComponent},
  {path:'patients/:id', component: PatientComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
