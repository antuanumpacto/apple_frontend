import { AuthService } from './../../service/auth.service';
import { HttpService } from './../../service/http.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  //Variables
  categorias: any = []
  count: number = 0;
  @Input() showButtons: boolean = true
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.showButtons)
    this.getCategorias()

    if(this.authService.isAuthenticated()){
      this.showButtons = true;
    }else {
      this.showButtons = false;
    }
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


  logout(){
    localStorage.clear();
    this.showButtons = true
  }


}
