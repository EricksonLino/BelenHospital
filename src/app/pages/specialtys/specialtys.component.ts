import { Component } from '@angular/core';
import { SpecialtyService } from '../../services/specialty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialtys',
  templateUrl: './specialtys.component.html',
  styleUrls: ['./specialtys.component.css']
})
export class SpecialtysComponent {

  specialtys: any =[];

  constructor(private specialtyService: SpecialtyService, private router: Router ) {
    this.getSpecialtys();
  }

  getSpecialtys() {
    this.specialtyService.getSpecialtys()
    .subscribe((data) => {
      this.specialtys = data;
      //console.log([this.specialtys])
    })
  }

  showDetail(id: number) {
    this.router.navigate(['/specialtys',id]);

  }
}
