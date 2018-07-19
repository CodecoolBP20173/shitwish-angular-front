import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart, Product} from '../models';
import {CartService} from '../services/cart.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router, UrlSegment} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ProductsService} from '../services/products.service';
import {UserService} from '../services/user.service';
import {OrderService} from '../services/order.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    cart: Cart;
    products: Product[] = [];
    amounts = new Map<number, number>();
    userLoggedIn = false;
    isShopping: boolean;
    private cartSubscription: Subscription;
    private userSub: Subscription;
    private shoppingSub: Subscription;

    constructor(
        private cartService: CartService,
        private productService: ProductsService,
        private router: Router,
        private userService: UserService,
        private orderService: OrderService
    ) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cart
            .subscribe(cart => {
                this.cart = cart;
                if (cart && cart.products) {
                    this.mapProducts(cart.products.map(lineItem => lineItem.id));
                    cart.products.forEach(lineItem => this.amounts.set(lineItem.id, lineItem.amount));
                }
            });
        this.userSub = this.userService.user.subscribe(user => this.userLoggedIn = user !== null);
        this.shoppingSub = this.orderService.isShopping.subscribe(isShopping => this.isShopping = isShopping);
    }

    clearCart() {
        this.cartService.deleteCart();
    }

    proceedToCheckout() {
        if (this.cart != null) {
            this.router.navigate(['/checkout']);
            this.orderService.isShopping.next(false);
        }
    }

    private async mapProducts(productIds: number[]) {
        this.products = await Promise.all(productIds.map(id => this.productService.fetchProduct(id)));
    }

    calculateSum() {
        if (this.products.length > 0) {
            return this.products
                .map(product => product.price * this.amounts.get(product.id))
                .reduce((a, b) => a + b);
        }
    }

    ngOnDestroy(): void {
        this.cartSubscription.unsubscribe();
        this.userSub.unsubscribe();
        this.shoppingSub.unsubscribe();
    }
}
