import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  formSignin: FormGroup;
  errores: any;
  errorMessage: string = "";
  showButtons: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private authService: AuthService
  ) {
    this.formSignin = this.formBuilder.group({
      usu_email: ['', [Validators.required, Validators.email]],
      usu_password: ['', [Validators.required, Validators.minLength(6)]],
    })
   }

   get signInFormValidator() {
    return this.formSignin.controls
  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.showButtons = true;
    }else {
      this.showButtons = false;
    }
  }

  signIn() {
    if (this.formSignin.valid) {
      this.httpService.apiPostRequest("login", this.formSignin.value).then(response => {
        if (response.status == "success") {
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("user",JSON.stringify(response.data.user));
          this.router.navigate(['/productos/mac'])
          this.showButtons = true;
        } else {
          this.errorMessage = response.error.message
          this.errores = response.error.errors
          console.log(this.errores)
        }
      })
    } else {
      Object.keys(this.formSignin.controls).forEach(field => {
        const control = this.formSignin.get(field);

        if (control != null)
          control.markAsDirty();
      })
    }
    console.log(this.formSignin)
  }

  checkErrors(listaErrores: any = [],field:string){
   
    const errores: any = [];

    for(const property in listaErrores){
      if(property == field){
        const propertyErrors: Array<string> = listaErrores[property]

        propertyErrors.forEach(error => {
          errores.push(error)
        })
      }
    }

    return errores;
  }

}
