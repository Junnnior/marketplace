import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shered/header/header.component';
import { IndexComponent } from './home/index/index.component';

import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './Shered/vendor/vendor.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    VendorComponent
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
