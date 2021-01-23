import { HttpService } from './../../service/http.service';
import { environment } from './../../../environments/environment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  storage:string;

  @Input() producto:any;
  @Output() checkCompra = new EventEmitter;
  showMessage: boolean =  false;
  constructor(
    private httpService: HttpService
  ) {
    this.storage = environment.storage

    console.log(this.storage)
   }

  ngOnInit(): void {
  }

  comprar(){
    console.log(this.producto)
    this.httpService.apiPostRequest("get_productos_by_id",this.producto).then(response => {
      if(response.status == "success"){
        this.showMessage = false
        this.checkCompra.emit(this.showMessage);
      }else {
        if(response.status == 401) {
         this.showMessage = true
         this.checkCompra.emit(this.showMessage);
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }

}
