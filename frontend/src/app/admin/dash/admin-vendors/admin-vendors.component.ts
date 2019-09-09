import { Component, OnInit } from '@angular/core';

import { VendorService } from 'src/app/Service/vendor.service';

import { Vendor } from 'src/app/Models/vendor.model';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.css']
})
export class AdminVendorsComponent implements OnInit {

  constructor(private vendorService: VendorService) { }

  vendors: Vendor[];

  async ngOnInit() {
    await this.getAllVendors();
  }

    // get all vendors
    getAllVendors(){
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
