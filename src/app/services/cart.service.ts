import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    cart = new BehaviorSubject<Cart>(null);

    constructor(private http: HttpClient) {
    }

    addToCart(id: number) {

    }
}
