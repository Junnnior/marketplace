import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './Shered/vendor/vendor.component';
import { IndexComponent } from './home/index/index.component'
import { LoginComponent } from './Shered/login/login.component';
import { DashComponent } from './admin/dash/dash.component';
import { AdminVendorsComponent } from './admin/dash/admin-vendors/admin-vendors.component';
import { AdminStoresComponent } from './admin/admin-stores/admin-stores.component';

const routes: Routes = [
  { path: 'vendor/:vendorId', component: VendorComponent },
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myStores/:vendorId', component: AdminStoresComponent },
  { path: 'admin/:vendorId', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
