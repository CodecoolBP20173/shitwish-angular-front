import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './main/product-list/product-list.component';
import {CheckoutComponent} from './main/checkout/checkout.component';
import {OrderConfirmationComponent} from './main/order-confirmation/order-confirmation.component';
import {AuthGuard} from './auth/auth.guard';
import {UploadItemComponent} from './main/upload-item/upload-item.component';

const routes: Routes = [
    {path: 'product-list', component: ProductListComponent},
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
    {path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [AuthGuard]},
    {path: 'upload-item', component: UploadItemComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'product-list'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
