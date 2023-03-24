import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full'
  },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
