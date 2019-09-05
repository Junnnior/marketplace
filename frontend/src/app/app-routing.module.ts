import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './Shered/vendor/vendor.component';
import { IndexComponent } from './home/index/index.component'

const routes: Routes = [
  { path: 'vendor/:vendorId', component: VendorComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
