import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Cart} from '../models';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

    private readonly CART_ENDPOINT = 'https://shitwish-cart-api-2017-3a.herokuapp.com/cart';
    private userSub: Subscription;
    cart = new BehaviorSubject<Cart>(null);

    constructor(private http: HttpClient, private userService: UserService) {
        this.userSub = this.userService.user.subscribe(user => {
            if (user) {
                this.fetchCart();
            }
        });
    }

    addToCart(id: number) {
        this.http.post<Cart>(this.CART_ENDPOINT + '/' + id, {}).subscribe(cart => this.cart.next(cart));
    }

    deleteCart() {
        this.http.delete<Cart>(this.CART_ENDPOINT).subscribe(cart => this.cart.next(cart));
    }

    removeItem(id: number) {
        this.http.delete<Cart>(this.CART_ENDPOINT + '/' + id).subscribe(cart => this.cart.next(cart));
    }

    removeProduct(id: number) {
        this.http.post<Cart>(this.CART_ENDPOINT + '/' + id, {'amount': -1}).subscribe(cart => this.cart.next(cart));
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    private fetchCart() {
        this.http.get<Cart>(this.CART_ENDPOINT).subscribe(cart => this.cart.next(cart));
    }
}
