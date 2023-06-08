import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ListproductComponent } from './pages/client/products/listproduct/listproduct.component';
import { ProductdetailComponent } from './pages/client/products/productdetail/productdetail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SigninComponent } from './pages/client/signin/signin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { NotfoundpageComponent } from './pages/client/notfoundpage/notfoundpage.component';
import { AboutComponent } from './pages/client/about/about.component';
import { BlogComponent } from './pages/client/blog/blog.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { ProductListComponent } from './pages/admin/produts/product-list/product-list.component';
import { AddComponent } from './pages/admin/produts/add/add.component';
import { UpdateComponent } from './pages/admin/produts/update/update.component';
import { AuthGuard } from './guards/auth-guard.guard';
const routes: Routes = [
  // Client
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'products', component: ListproductComponent },
      { path: 'products/:id', component: ProductdetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  // Admin
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'add', component: AddComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'listadmin', component: ProductListComponent },
      // { path: 'products/:id', component: ProductDetailComponent },
    ],
  },
  // Auth
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  // Not Found Page
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
