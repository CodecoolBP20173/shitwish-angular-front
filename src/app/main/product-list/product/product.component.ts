import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models';
import {CartService} from '../../../services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input('product')
    public product: Product;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

    addToCart() {
        this.cartService.addToCart(this.product.id);
    }

}
