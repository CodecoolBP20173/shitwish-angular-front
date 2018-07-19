import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private readonly CART_ENDPOINT = 'https://shitwish-cart-api-2017-3a.herokuapp.com/cart';
    cart = new BehaviorSubject<Cart>(null);

    constructor(private http: HttpClient) {
    }

    addToCart(id: number) {
        this.http.post<Cart>(this.CART_ENDPOINT + '/' + id, null).subscribe(cart => this.cart.next(cart));
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
}
