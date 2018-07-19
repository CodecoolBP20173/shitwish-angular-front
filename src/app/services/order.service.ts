import {Injectable, OnDestroy} from '@angular/core';
import {Address, Cart, LineItem, User} from '../models';
import {CartService} from './cart.service';
import {UserService} from './user.service';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

    isShopping = new BehaviorSubject<boolean>(true);
    private cartSub: Subscription;
    private products: LineItem[];
    private readonly ORDER_ENDPOINT = 'https://shitwish-order-api.herokuapp.com/order';

    constructor(private http: HttpClient, private cartService: CartService) {
        this.cartSub = this.cartService.cart.subscribe(cart => this.products = cart.products);
    }

    sendOrder(address: Address) {
        console.log(this.products);
        this.http.post(this.ORDER_ENDPOINT, {address, 'products': this.products}).subscribe(
            (order) => {
                console.log(order);
                this.cartService.deleteCart();
            });
    }

    ngOnDestroy(): void {
        this.cartSub.unsubscribe();
    }
}
