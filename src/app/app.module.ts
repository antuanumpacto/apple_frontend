import { ProductCardComponent } from './componets/product-card/product-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MacComponent } from './pages/mac/mac.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MacComponent,
    ProductosComponent,
    ProductCardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
