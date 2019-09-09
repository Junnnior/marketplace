import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  showProdcts: boolean = false;
  showVendors: boolean = true;
  
  ngOnInit() {
  }

  viewProdcts(){
    this.showProdcts = true;
    this.showVendors = false;

  }

  viewVendors(){
    this.showProdcts = false;
    this.showVendors = true;
  }
}
