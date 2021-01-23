import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  producto: string = "";

  /* listaProductos: any = [
    {
      pro_nombre: "Nombre 1",
      pro_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/google-fotos.jpg",
      pro_descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid autem explicabo! Tempora natus, ad earum, nesciunt, quos quam at ut molestias perspiciatis illo modi mollitia similique suscipit magni consectetur."
    },
    {
      pro_nombre: "Nombre 2",
      pro_imagen: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/152659-laptops-feature-apple-silicon-what-does-it-mean-for-your-existing-mac-and-your-next-one-image3-ompkj48tmh.jpg",
      pro_descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid autem explicabo! Tempora natus, ad earum, nesciunt, quos quam at ut molestias perspiciatis illo modi mollitia similique suscipit magni consectetur."
    },
    {
      pro_nombre: "Nombre 3",
      pro_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/google-fotos.jpg",
      pro_descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid autem explicabo! Tempora natus, ad earum, nesciunt, quos quam at ut molestias perspiciatis illo modi mollitia similique suscipit magni consectetur."
    },
    {
      pro_nombre: "Nombre 4",
      pro_imagen: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/152659-laptops-feature-apple-silicon-what-does-it-mean-for-your-existing-mac-and-your-next-one-image3-ompkj48tmh.jpg",
      pro_descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid autem explicabo! Tempora natus, ad earum, nesciunt, quos quam at ut molestias perspiciatis illo modi mollitia similique suscipit magni consectetur."
    },
    {
      pro_nombre: "Nombre 5",
      pro_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/google-fotos.jpg",
      pro_descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid autem explicabo! Tempora natus, ad earum, nesciunt, quos quam at ut molestias perspiciatis illo modi mollitia similique suscipit magni consectetur."
    },
  ]; */
  listaProductos: any = [];
  showMessage: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    //console.log( this.activeRoute.snapshot.paramMap.get('item'))

    this.activeRoute.params.subscribe(data => {
      this.producto = data.item
      this.getProductos()
      console.log(this.producto)
    });

   
  }

  getProductos(){
    this.httpService.apiPostRequest("get_productos_by_url",{cat_url: this.producto}).then(response => {
      console.log(response)
      if(response.status == "success"){
        this.listaProductos = response.data
        console.log(this.listaProductos)
      }else {
        console.log("error",response)
      }
    })
  }


  checkComprar(event: any){
    console.log(event)
    this.showMessage = event
  }

}
