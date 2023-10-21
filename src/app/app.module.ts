import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerProductListComponent } from './seller/seller-product-list/seller-product-list.component';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller/seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { EachProductDetailsComponent } from './products/each-product-details/each-product-details.component';
import { ToUppercasePipe } from './pipe/to-uppercase.pipe';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { SelectedProductComponent } from './products/selected-product/selected-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerProductListComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    UserLoginComponent,
    EachProductDetailsComponent,
    ToUppercasePipe,
    UserProfileComponent,
    SelectedProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    // FontAwesomeModule,
    // NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
