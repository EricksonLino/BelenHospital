import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialtyService } from '../../services/specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent {

  specialty: any = {};

  constructor(private router: ActivatedRoute, private specialtyService: SpecialtyService){
    router.params.subscribe( params => {
      //console.log('Este es el ID:' + params['id'])
      this.getSpecialtyById(params['id'])
    });
  }

  getSpecialtyById(id: number) {
    this.specialtyService.getSpecialtyById(id).subscribe(data => {
      this.specialty =data;
    });
  }
}
