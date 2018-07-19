import {Injectable, OnDestroy} from '@angular/core';
import {Address, Cart, User} from '../models';
import {CartService} from './cart.service';
import {UserService} from './user.service';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

    private cartSub: Subscription;
    private cart: Cart;

    constructor(private cartService: CartService, private userService: UserService) {
        //this.cartSub = cartService.cart.subscribe(cart => this.cart = cart);
    }

    sendOrder(address: Address) {
        
    }

    ngOnDestroy(): void {
        this.cartSub.unsubscribe();
    }
}
