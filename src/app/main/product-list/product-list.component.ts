import {Component, OnInit} from '@angular/core';
import {Product} from '../../models';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public productList: Product[] = [];

    constructor() {
        this.productList.push({
            id: 1,
            category: 'Tablet',
            description: 'This is a very bad tablet. If you are looking for slow and half broken product feel free to buy it.',
            imageUrl: 'https://static11.edstatic.net/product_images/280x210/resize/ifhd_dsahm9vj.jpg?v=1',
            name: 'Shitty Tablet',
            price: 499,
            userId: 'myID'
        });
        this.productList.push({
            id: 1,
            category: 'Tablet',
            description: 'This is a very bad tablet. If you are looking for slow and half broken product feel free to buy it.',
            imageUrl: 'https://static11.edstatic.net/product_images/280x210/resize/ifhd_dsahm9vj.jpg?v=1',
            name: 'Shitty Tablet',
            price: 499,
            userId: 'myID'
        });
    }

    ngOnInit() {
    }

}
