import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './Shered/vendor/vendor.component';
import { IndexComponent } from './home/index/index.component'
import { LoginComponent } from './Shered/login/login.component';
import { DashComponent } from './admin/dash/dash.component';
import { AdminVendorsComponent } from './admin/dash/admin-vendors/admin-vendors.component';
import { AdminStoresComponent } from './admin/admin-stores/admin-stores.component';
import { ProductCreateComponent } from './admin/dash/product-create/product-create.component';

const routes: Routes = [
  { path: 'vendor/:vendorId', component: VendorComponent },
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/:vendorId', component: DashComponent },
  // { path: 'admin/product', component: ProductCreateComponent },
  { path: 'myStores/:vendorId', component: AdminStoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
