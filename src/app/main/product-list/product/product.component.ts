import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../models';
import {CartService} from '../../../services/cart.service';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

    @Input('product')
    public product: Product;
    public userLoggedIn = false;
    private userSub: Subscription;

    constructor(private cartService: CartService, private userService: UserService) { }

    ngOnInit() {
        this.userSub = this.userService.user.subscribe(user => this.userLoggedIn = user !== null);
    }

    addToCart() {
        this.cartService.addToCart(this.product.id);
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}
