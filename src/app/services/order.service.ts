import {Injectable, OnDestroy} from '@angular/core';
import {Address, Cart, User} from '../models';
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
    private readonly ORDER_ENDPOINT = 'https://shitwish-order-2017-3.herokuapp.com/order';

    constructor(private http: HttpClient, private cartService: CartService) {
    }

    sendOrder(address: Address) {
        this.http.post(this.ORDER_ENDPOINT, address).subscribe(
            (order) => {
                this.cartService.deleteCart();
            });
    }

    ngOnDestroy(): void {
        this.cartSub.unsubscribe();
    }
}
