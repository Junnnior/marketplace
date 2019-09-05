import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  product = [
    {"name":"Camisa", "price":"20,50"},
    {"name":"Banana", "price":"2,15"},
    {"name":"Bolo", "price":"7,50"},
    {"name":"Sapato", "price":"220,50"},
    {"name":"Sapato", "price":"220,50"},
    {"name":"Sapato", "price":"220,50"},
  ];
}
