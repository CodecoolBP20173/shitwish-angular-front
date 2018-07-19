import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-upload-item',
    templateUrl: './upload-item.component.html',
    styleUrls: ['./upload-item.component.css']
})
export class UploadItemComponent implements OnInit {

    @ViewChild('addressForm') addressForm: NgForm;

    constructor(private productService: ProductsService, private router: Router) {
    }

    ngOnInit() {
    }

    onUpload() {
        if (this.addressForm.valid) {
            this.productService.addItem(this.addressForm.value);
        }
        this.router.navigate(['/']);
    }
}
