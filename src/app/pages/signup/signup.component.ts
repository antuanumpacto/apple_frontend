import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  formSignup: FormGroup;
  errores: any;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
    this.formSignup = this.formBuilder.group({
      usu_nombre: ['', [Validators.required]],
      usu_apellido: ['', [Validators.required]],
      usu_edad: ['', [Validators.required, Validators.pattern("^[0-9]*")]],
      usu_domicilio: [''],
      usu_email: ['', [Validators.required, Validators.email]],
      usu_password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get signUpFormValidator() {
    return this.formSignup.controls
  }

  ngOnInit(): void {

  }

  saveForm() {
    if (this.formSignup.valid) {
      this.httpService.apiPostRequest("sign_up", this.formSignup.value).then(response => {
        if (response.status == "success") {
          this.router.navigate(['/productos/mac'])
        } else {
          this.errores = response.error.errors
          console.log(this.errores)
        }
      })
    } else {
      Object.keys(this.formSignup.controls).forEach(field => {
        const control = this.formSignup.get(field);

        if (control != null)
          control.markAsDirty();
      })
    }
    console.log(this.formSignup)
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
