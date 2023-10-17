import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignDocService {

  constructor(private http:HttpClient) { }

  AssignDoctor(Name:string,pid:string){
    const url = `http://localhost:8088/hospital/${Name}/${pid}`;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(url,null,{headers});
  }
}
