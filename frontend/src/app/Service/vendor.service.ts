import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vendor } from '../Models/vendor.model';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  vendor: Vendor[]

  readonly rootURL = "http://localhost:3333";

  // busca todos os vendedores
  public getAllVendors(): Promise<Vendor[]> {
    // Efetuar requisição http
    return this.http.get<Vendor[]>(`${this.rootURL}/vendors`)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

}
