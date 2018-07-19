import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order.service';

@Component({
    selector: 'app-order-confirmed',
    templateUrl: './order-confirmation.component.html',
    styleUrls: ['./order-confirmation.component.css']
})

export class OrderConfirmationComponent implements OnInit {

    products: any[];
    totalPrice: number;
    paymentId: string;

    constructor(private orderService: OrderService, private router: Router) {
    }

    ngOnInit() {
        // const order = this.orderService.sendOrder;
        // this.totalPrice = order.productOrders
        //     .map(po => po.quantity * po.product.defaultPrice)
        //     .reduce((a, b) => a + b, 0);
        // this.products = order.productOrders.map(po => {
        //     return {
        //         'name': po.product.name,
        //         'quantity': po.quantity,
        //         'price': po.product.defaultPrice,
        //         'currency': po.product.defaultCurrency
        //     };
        // });
        // this.paymentId = order.paymentId;
    }

    navigateBack() {
        this.router.navigate(['/']);
    }
}
