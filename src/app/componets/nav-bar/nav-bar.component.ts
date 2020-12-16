import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  //Variables
  categorias: any = []
  count: number = 0;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.getCategorias()
  }


  getCategorias() {
    this.httpService.apiPostRequest("get_categorias").then(response => {
      console.log(response)
      if(response.status == "success"){
        this.categorias = response.data
        console.log(this.categorias)
      }else {
        console.log("hay un error")
      }
    })

  }



}
