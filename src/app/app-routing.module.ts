import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { EachProductDetailsComponent } from './products/each-product-details/each-product-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"seller-auth",
    component:SellerAuthComponent
  },
  //seller
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"products",
    component:SellerProductListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"add-products",
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"seller-update-products/:id",
    component:SellerUpdateProductComponent,
    canActivate:[AuthGuard]
  },
  //user
  {
    path:"user-login",
    component:UserLoginComponent
  },
  {
    path:"product-details/:id",
    component:EachProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
