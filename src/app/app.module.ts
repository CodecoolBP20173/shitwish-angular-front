import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { OrderConfirmationComponent } from './main/order-confirmation/order-confirmation.component';
import { SearchBarComponent } from './main/product-list/search-bar/search-bar.component';
import { ProductComponent } from './main/product-list/product/product.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    MainComponent,
    ProductListComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    SearchBarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
