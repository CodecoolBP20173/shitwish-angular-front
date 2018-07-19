import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-order-confirmed',
    templateUrl: './order-confirmation.component.html',
    styleUrls: ['./order-confirmation.component.css']
})

export class OrderConfirmationComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    navigateBack() {
        this.router.navigate(['/product-list']);
    }
}
