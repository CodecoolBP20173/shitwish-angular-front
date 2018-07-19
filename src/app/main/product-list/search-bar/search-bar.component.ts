import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ProductsService} from '../../../services/products.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    faSearch = faSearch;

    constructor(private productService: ProductsService) { }

    ngOnInit() {
    }

    onSearch(term: string) {
        this.productService.searchTerms.next(term);
    }
}
