import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"seller-auth",
    component:SellerAuthComponent
  },
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"products",
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"add-products",
    component:AddProductsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
