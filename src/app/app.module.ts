import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './pages/admin/produts/product-list/product-list.component';
import { AddComponent } from './pages/admin/produts/add/add.component';
import { UpdateComponent } from './pages/admin/produts/update/update.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ListproductComponent } from './pages/client/products/listproduct/listproduct.component';
import { ProductdetailComponent } from './pages/client/products/productdetail/productdetail.component';
import { NotfoundpageComponent } from './pages/client/notfoundpage/notfoundpage.component';
import { SigninComponent } from './pages/client/signin/signin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/client/about/about.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { BlogComponent } from './pages/client/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    AddComponent,
    UpdateComponent,
    SidebarComponent,
    HomepageComponent,
    ListproductComponent,
    ProductdetailComponent,
    NotfoundpageComponent,
    SigninComponent,
    SignupComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
