import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../models';
import {CartService} from '../services/cart.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    products: Product[] = [];
    private cartSubscription: Subscription;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cart.subscribe();
        // this.products.push({
        //         id: 1,
        //         userId: 'asd',
        //         name: 'Some product',
        //         category: 'Test category',
        //         imageUrl: 'https://static11.edstatic.net/product_images/280x210/resize/ifhd_dsahm9vj.jpg?v=1',
        //         description: 'This is a very bad tablet. If you are looking for slow and half broken product feel free to buy it.',
        //         price: 1012
        //     }
        // );
        // this.products.push({
        //         id: 2,
        //         userId: 'asd',
        //         name: 'Some other product',
        //         category: 'Test category',
        //         imageUrl: 'http://media.4rgos.it/i/Argos/5654327_R_Z001A?$Web$&$DefaultPDP570$',
        //         description: 'This is a very bad tablet. If you are looking for slow and half broken product feel free to buy it.',
        //         price: 420
        //     }
        // );
    }

    clearCart() {
        this.cartService.deleteCart();
    }

    ngOnDestroy(): void {
        this.cartSubscription.unsubscribe();
    }

    proceedToCheckout() {

    }
}
