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
import { AuthGuard } from './guards/auth-guard.guard';
import { AddComponent } from './pages/admin/produts/add/add.component';
import { UpdateComponent } from './pages/admin/produts/update/update.component';
import { CategoryListComponent } from './pages/admin/categories/category-list/category-list.component';
import { AddCategoryComponent } from './pages/admin/categories/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/categories/update-category/update-category.component';
import { ListUserComponent } from './pages/admin/users/list-user/list-user.component';
import { AddUserComponent } from './pages/admin/users/add-user/add-user.component';
import { UpdateUserComponent } from './pages/admin/users/update-user/update-user.component';
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
      // products
      { path: 'products', component: ProductListComponent },

      { path: 'products/add', component: AddComponent },
      { path: 'products/update/:id', component: UpdateComponent },
      // categories
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/add', component: AddCategoryComponent },
      { path: 'categories/update/:id', component: UpdateCategoryComponent },

      // users
      { path: 'users', component: ListUserComponent },
      { path: 'user/add', component: AddUserComponent },
      { path: 'user/update/:id', component: UpdateUserComponent },
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
