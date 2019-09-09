import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shered/header/header.component';
import { IndexComponent } from './home/index/index.component';

import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './Shered/vendor/vendor.component';
import { ListProductsComponent } from './Shered/list-products/list-products.component';
import { ProductsByIdComponent } from './Shered/products-by-id/products-by-id.component';
import { LoginComponent } from './Shered/login/login.component';
import { DashComponent } from './admin/dash/dash.component';
import { AdminVendorsComponent } from './admin/dash/admin-vendors/admin-vendors.component';
import { AdminProductsComponent } from './admin/dash/admin-products/admin-products.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    VendorComponent,
    ListProductsComponent,
    ProductsByIdComponent,
    LoginComponent,
    DashComponent,
    AdminVendorsComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
  
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
