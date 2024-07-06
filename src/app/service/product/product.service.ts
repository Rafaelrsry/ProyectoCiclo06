import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product/product';
import { Observable } from 'rxjs';
import { Nosotros } from '../../models/nosotros/nosotros';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}




  
  getAllProducto():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:8080/api/v1/producto");
  }

  getProductoId(id:number):Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:8080/api/v1/producto/"+id);
  }


  createProducto(producto: Product):Observable<Product>{
    return this.httpClient.post<Product>("http://localhost:8080/api/v1/producto",producto);
  }

  updateProducto(producto: Product):Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:8080/api/v1/producto/"+producto.idproducto,producto)
  }
}
