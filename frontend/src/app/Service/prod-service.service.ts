import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(private http: HttpClient) { }

  product: Product[];

  readonly rootURL = "http://localhost:3333";

  // busca todos os produtos
  public getAllProd(): Promise<Product[]> {
    // Efetuar requisição http
    return this.http.get<Product[]>(`${this.rootURL}/products`)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

}

