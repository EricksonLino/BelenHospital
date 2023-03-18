import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  patient: any ={};

  constructor(private router: ActivatedRoute, private patientService: PatientService) {
    router.params.subscribe(params => {
      //console.log('Este es el ID:' + params['id']);
      this.getPatientById(params['id']);
    })
  }

  getPatientById(id: number) {
    this.patientService.getPatientById(id).subscribe(params => {
      this.patient=params;
    });
  }

}
