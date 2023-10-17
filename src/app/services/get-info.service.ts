import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
  private baseUrl:string = 'http://localhost:8088/hospital/patient/all'
  private url:string = '';

  constructor(private http:HttpClient) { }

  getInfo(filter:string){
    const url = `http://localhost:8088/hospital/${filter}/all`;
    return this.http.get(url);
  }
}
