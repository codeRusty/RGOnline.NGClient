import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { ProductdetailComponent } from './Components/productdetail/productdetail.component';
import { CartpageComponent } from './Components/cartpage/cartpage.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';


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
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
