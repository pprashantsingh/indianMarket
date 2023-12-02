import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddadminService {

  apiUrl=environment.host;

  constructor(private http:HttpClient) { }

  addAdmin(data:any):Observable<any>{
    console.log(data,"123456789")
    return this.http.post(`${this.apiUrl}/add/admin`,data)
  }
}
