import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart, Product} from '../models';
import {CartService} from '../services/cart.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ProductsService} from '../services/products.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    cart: Cart;
    products: Product[] = [];
    private cartSubscription: Subscription;

    constructor(
        private cartService: CartService,
        private productService: ProductsService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cart
            .pipe(tap(cart => console.log(cart)))
            .subscribe(cart => {
                this.cart = cart;
                if (cart && cart.products) {
                    this.mapProducts(cart.products.map(lineItem => lineItem.id));
                }
            });
    }

    clearCart() {
        this.cartService.deleteCart();
    }

    ngOnDestroy(): void {
        this.cartSubscription.unsubscribe();
    }

    proceedToCheckout() {
        if (this.cart != null) {
            this.router.navigate(['/checkout']);
        }
    }

    private async mapProducts(productIds: number[]) {
        this.products = await Promise.all(productIds.map(id => this.productService.fetchProduct(id)));
    }
}
