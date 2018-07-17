import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './main/product-list/product-list.component';
import {CheckoutComponent} from './main/checkout/checkout.component';
import {OrderConfirmationComponent} from './main/order-confirmation/order-confirmation.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: []},
  {path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: []},
  {path: '**', redirectTo: 'product-list'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
