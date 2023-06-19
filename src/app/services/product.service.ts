import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Iproduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor (private http:HttpClient){}
getProduct():Observable<Iproduct[]>{
  return this.http.get<Iproduct[]>('http://localhost:3000/products')
}
getdetail(id:any):Observable<Iproduct>{
  return this.http.get<Iproduct>('http://localhost:3000/products/'+id)
}
AddProduct(product:Iproduct):Observable<Iproduct>{
  return this.http.post<Iproduct>('http://localhost:3000/products', product)
}
DeleteProduct(id:any):Observable<Iproduct>{
  return this.http.delete<Iproduct>('http://localhost:3000/products/'+id)
}
UpdateProduct(product:Iproduct):Observable<Iproduct>{
  return this.http.put<Iproduct>(`http://localhost:3000/products/${product.id}`,product)
}
}
