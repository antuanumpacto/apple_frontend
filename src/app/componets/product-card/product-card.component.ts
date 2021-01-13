import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  storage:string;

  @Input() producto:any;

  constructor() {
    this.storage = environment.storage

    console.log(this.storage)
   }

  ngOnInit(): void {
    console.log(this.producto)
  }

  comprar(){
    console.log("data")
  }

}
