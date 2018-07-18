import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Product} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    products = new BehaviorSubject<Product[]>([]);
    searchTerms = new Subject<string>();
    private readonly PRODUCTS_ENDPOINT = '';

    constructor(private http: HttpClient) {
        this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
        ).subscribe((term: string) => this.fetchProducts(term));
    }

    fetchProducts(term?: string) {
        // TODO: make sure the term is uri encoded
        this.http.get<Product[]>(`${this.PRODUCTS_ENDPOINT}/?${term ? `query=${term}&` : ''}limit=20&offset=0`)
            .subscribe(products => this.products.next(products));
    }
}
