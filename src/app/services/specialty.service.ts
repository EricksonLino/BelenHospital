import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  urlBase: string ='http://localhost:5176/api/Specialtys';

  constructor(private http: HttpClient) { }

  getSpecialtys() {
    return this.http.get(this.urlBase);
  }
}
