import { ProductosComponent } from './pages/productos/productos.component';
import { MacComponent } from './pages/mac/mac.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mac',
    component: MacComponent
  },
  {
    path: 'productos/:item',
    component: ProductosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

