import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input('product')
    public product: Product;

    constructor() {
    }

    ngOnInit() {
    }

    addToCart() {
        console.log('Added to cart');
    }

}
