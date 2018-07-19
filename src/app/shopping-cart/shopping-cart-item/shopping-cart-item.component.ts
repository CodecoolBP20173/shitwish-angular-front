import {Component, Input, OnInit} from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Product} from '../../models';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-shopping-cart-item',
    templateUrl: './shopping-cart-item.component.html',
    styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

    faTrashAlt = faTrashAlt;
    faMinus = faMinus;
    faPlus = faPlus;

    @Input('product')
    product: Product;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

    addItem() {
        this.cartService.addToCart(this.product.id);
    }

    removeItem() {
        this.cartService.removeItem(this.product.id);
    }

    removeProduct() {
        this.cartService.removeProduct(this.product.id);
    }
}
