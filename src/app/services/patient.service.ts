import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  urlBase: string = 'http://localhost:5176/api/Patients';

  constructor(private http: HttpClient) { }

  getPatients(){
    return this.http.get(this.urlBase);

  }
}
