import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  patients: any=[];

  constructor(private patientservice: PatientService) {
    this.getPatients();
  }
  getPatients(){
    this.patientservice.getPatients()
    .subscribe((data => {
      this.patients = data;
      console.log([this.patients]);
    }))
  }
}
