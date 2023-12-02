import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  apiUrl=environment.host

  constructor(private http:HttpClient) { }

  addProduct(data:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/add/product`,data)
  }

  uploadProductImg(data:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/add/productImage`,data)
  }
  
}
