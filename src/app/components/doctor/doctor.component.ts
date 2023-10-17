import { Component } from '@angular/core';
import { PostPatientService } from 'src/app/services/post-patient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  submitted = false;

    constructor(private apiService:PostPatientService){}

    onFieldFocus(){
      this.submitted = false;
      console.log("woah its focused ddemnnnn");
      
    }

    onSubmit(form:NgForm) {    
      const doctor = form.value;
  
      this.apiService.postFormData((doctor),'doctor').subscribe(
        (response)=> {
          console.log(response);
          form.reset();
          this.submitted = true;
        }
      );

      form.touched
  
    }
}

interface Doctor{
  name:string,
  spec:string,
  pno:string
}
