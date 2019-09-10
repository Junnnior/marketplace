import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/Models/vendor.model';
import { VendorService } from 'src/app/Service/vendor.service';

@Component({
  selector: 'app-admin-stores',
  templateUrl: './admin-stores.component.html',
  styleUrls: ['./admin-stores.component.css']
})
export class AdminStoresComponent implements OnInit {
  
  constructor(private vendorService: VendorService,private route: ActivatedRoute) { }
  
  vendor: Vendor[]
  vendorId;

  async ngOnInit() {
    await this.getIdByParams();
    await this.getVendorById(this.vendorId);

  }

  // get id by params
  getIdByParams(){
    this.route.params.subscribe(params => {
      this.vendorId = params['vendorId'];
    });
  }

  // get vendor by id
  getVendorById(id){
    this.vendorService.getVendorById(id)
      .then((resProd: Array<Vendor>) => {
        this.vendor = resProd;
        console.log(this.vendor)
    })
    .catch((param: any) => {
      console.log("Erro de Conexão")
     });
  }

}
