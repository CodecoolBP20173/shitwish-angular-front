import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    public productList: Product[] = [];

    private productSubscription: Subscription;

    constructor(private productService: ProductsService) { }

    ngOnInit() {
        this.productSubscription = this.productService.products.subscribe(
            products => this.productList = products
        );
        this.productService.fetchProducts();
    }

    ngOnDestroy() {
        this.productSubscription.unsubscribe();
    }

}
