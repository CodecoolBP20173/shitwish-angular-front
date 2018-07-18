import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public product: Product;

    constructor() {
        this.product = {
            id: 1,
            category: 'Tablet',
            description: 'This is a very bad tablet. If you are looking for slow and half broken product feel free to buy it.',
            imageUrl: 'https://static11.edstatic.net/product_images/280x210/resize/ifhd_dsahm9vj.jpg?v=1',
            name: 'Shitty Tablet',
            price: 499,
            userId: 'myID'
        };
    }

    ngOnInit() {
    }

    addToCart() {
        console.log('Added to cart');
    }

}
