import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { ClientAuthService } from './Services/client-auth.service';


import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { ProductdetailComponent } from './Components/productdetail/productdetail.component';
import { CartpageComponent } from './Components/cartpage/cartpage.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CategoryBarComponent } from './Components/category-bar/category-bar.component';
import { FilterBarComponent } from './Components/filter-bar/filter-bar.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoaderComponent } from './Common/components/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
        LoginComponent,
        RegisterComponent,
        ProductlistComponent,
        ProductdetailComponent,
        CartpageComponent,
        PaymentPageComponent,
        HomeComponent,
        FooterComponent,
        WishlistComponent,
        CategoryBarComponent,
        FilterBarComponent,
        HomeBannerComponent,
        ContactUsComponent,
        AboutUsComponent,
        NotFoundComponent,
        LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClientAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
