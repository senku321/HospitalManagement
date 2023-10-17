import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  DeleteRecord(id:string){
    const url = `http://localhost:8088/hospital/patient/delete/${id}`;
    return this.http.delete(url);
  }
}
