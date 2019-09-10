import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdServiceService } from 'src/app/Service/prod-service.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-products-by-id',
  templateUrl: './products-by-id.component.html',
  styleUrls: ['./products-by-id.component.css']
})
export class ProductsByIdComponent implements OnInit {

  constructor(private prodService: ProdServiceService,
    private route: ActivatedRoute,) { }

  products: Product[];
  vendorId;

  async ngOnInit() {
    await this.getIdByParams();
    await this.getPorductsById(this.vendorId);

  }

  // get id by params
  getIdByParams(){
    this.route.params.subscribe(params => {
      this.vendorId = params['vendorId'];
    });
  }
  // get product by id
  getPorductsById(id){
    this.prodService.getProdById(id)
      .then((resProd: Array<Product>) => {
        this.products = resProd;
        console.log(this.products)
    })
    .catch((param: any) => {
      console.log("Erro de Conexão")
     });
  }
}
