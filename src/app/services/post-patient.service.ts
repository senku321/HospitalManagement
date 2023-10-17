import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostPatientService {
  // url:string = 'http://localhost:8088/hospital/patient/add';


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  postFormData(formData:any,filter:string) {
    const url = `http://localhost:8088/hospital/${filter}/add`;
    return this.http.post(url, formData,this.options);
  }
}
