import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderService} from '../../services/order.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    @ViewChild('addressForm') addressForm: NgForm;

    constructor(private orderService: OrderService) { }

    ngOnInit() {
    }

    onSubmit() {
        if (!this.addressForm.valid) {
            return;
        }
        this.orderService.sendOrder(this.addressForm.value);
    }

}
