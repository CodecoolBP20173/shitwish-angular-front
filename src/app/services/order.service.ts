import {Injectable, OnDestroy} from '@angular/core';
import {Address, Cart, LineItem, User} from '../models';
import {CartService} from './cart.service';
import {UserService} from './user.service';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

    isShopping = new BehaviorSubject<boolean>(true);
    private cartSub: Subscription;
    private products: LineItem[];
    private readonly ORDER_ENDPOINT = 'https://shitwish-order-api.herokuapp.com/order';

    constructor(private http: HttpClient, private cartService: CartService, private router: Router) {
        this.cartSub = this.cartService.cart.subscribe(cart => {
            if (cart) {
                this.products = cart.products;
            }
        });
    }

    sendOrder(address: Address) {
        this.http.post(this.ORDER_ENDPOINT, {address, 'products': this.products}).subscribe(
            (order) => {
                this.router.navigate(['/order-confirmation']);
                this.cartService.deleteCart();
            });
    }

    ngOnDestroy(): void {
        this.cartSub.unsubscribe();
    }
}
