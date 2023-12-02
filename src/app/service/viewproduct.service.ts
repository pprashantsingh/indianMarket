import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewproductService {

  apiUrl=environment.host

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{

    return this.http.get(`${this.apiUrl}/getall/product`)
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/product/${id}`)
  }

  updateProduct(id:any,data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/update/product/${id}`,data)
  }

  updateProductImg(data:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/add/productImage`,data)
  }
}
