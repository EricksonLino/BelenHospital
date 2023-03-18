import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  patients: any=[];

  constructor(private patientservice: PatientService, private router: Router) {
    this.getPatients();

  }
  getPatients(){
    this.patientservice.getPatients()
    .subscribe((data => {
      this.patients = data;
      //console.log([this.patients]);
    }))
  }

  showDetail(id: number){
    this.router.navigate(['/patients',id])
  }

}
