import { Component, OnInit } from '@angular/core';

import { ProdServiceService } from 'src/app/Service/prod-service.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private prodService: ProdServiceService) { }

  products: Product[];

  async ngOnInit() {
    await this.getAllPorducts();

  }
  
  // get all products
  getAllPorducts(){
    this.prodService.getAllProd()
      .then((resProd: Array<Product>) => {
        this.products = resProd;
        console.log(this.products)
    })
    .catch((param: any) => {
      console.log("Erro de Conexão")
     });
  }
}
