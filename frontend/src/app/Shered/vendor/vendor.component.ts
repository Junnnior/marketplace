import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VendorService } from 'src/app/Service/vendor.service';

import { Product } from 'src/app/Models/product.model';
import { Vendor } from 'src/app/Models/vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})

export class VendorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private vendorService: VendorService) { }

  vendorId: number;
  products: Product[];
  vendor: Vendor[]

  async ngOnInit() {
    await this.getIdInParams();
    await this.getVendorById();

  }

  getIdInParams(){
     // get id by params
     this.route.params.subscribe(params => {
      this.vendorId = params['vendorId'];
    });
  }

  getVendorById(){
    this.vendorService.getVendorById(this.vendorId)
    .then((resVendors: Array<Vendor>) => {
      this.vendor = resVendors;
      console.log(this.vendor)
    })
    .catch((param: any) => {
      console.log("Erro de Conexão")
    });
  }

}
