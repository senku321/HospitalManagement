import { Component } from '@angular/core';
import { PostPatientService } from 'src/app/services/post-patient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  submitted = false;

  constructor(private apiService:PostPatientService){}

  onFieldFocus(){
    this.submitted = false;
    console.log("woah its focused ddemnnnn");
    
  }

  onSubmit(form:NgForm) {    
    const patient = form.value;

    this.apiService.postFormData((patient),'patient').subscribe(
      (response)=> {
        console.log(response);
        form.reset();
        this.submitted = true;
      }
    );

  }
}

interface Patient {
  age: number;
  bloodgroup: string;
  gender: string;
  height: number;
  name: string;
  phone_no: string;
  weight: number;

}
