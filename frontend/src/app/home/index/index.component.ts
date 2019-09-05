import { Component, OnInit } from '@angular/core';

import { ProdServiceService } from 'src/app/Service/prod-service.service';
import { VendorService } from 'src/app/Service/vendor.service';

import { Product } from 'src/app/Models/product.model';
import { Vendor } from 'src/app/Models/vendor.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private prodService: ProdServiceService,
    private vendorService: VendorService) { }

  products: Product[];
  vendors: Vendor[];

  ngOnInit() {

    // get all products
    this.prodService.getAllProd()
      .then((resProd: Array<Product>) => {
        this.products = resProd;
        console.log(this.products)
      })
      .catch((param: any) => {
        console.log("Erro de Conexão")
      });

    // get all vendors
    this.vendorService.getAllVendors()
      .then((resVendors: Array<Vendor>) => {
        this.vendors = resVendors;
        console.log(this.vendors)
      })
      .catch((param: any) => {
        console.log("Erro de Conexão")
      });
  }



}
