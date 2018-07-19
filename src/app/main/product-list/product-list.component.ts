import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';
import {OrderService} from '../../services/order.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    public productList: Product[] = [];

    private productSubscription: Subscription;

    constructor(private productService: ProductsService, private orderService: OrderService) {
    }

    ngOnInit() {
        this.productSubscription = this.productService.products.subscribe(
            products => this.productList = products
        );
        this.productService.fetchProducts();
        this.orderService.isShopping.next(true);
    }

    ngOnDestroy() {
        this.productSubscription.unsubscribe();
    }

}
