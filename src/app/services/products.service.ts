import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {Product} from '../models';
import {HttpClient} from '@angular/common/http';
import {pick} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    products = new BehaviorSubject<Product[]>([]);
    searchTerms = new Subject<string>();
    private readonly PRODUCTS_QUERY_ENDPOINT = 'https://shitwish-product-motivetee.herokuapp.com/product/search/findAllByName';
    private readonly PRODUCTS_ENDPOINT = 'https://shitwish-product-motivetee.herokuapp.com/products';

    constructor(private http: HttpClient) {
        this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
        ).subscribe((term: string) => this.fetchProducts(term));
    }

    fetchProducts(term?: string) {
        if (term) {
            this.http.get<any>(`${this.PRODUCTS_QUERY_ENDPOINT}?query=${term}`)
                .pipe(
                    map((response: any) => {
                        const products = response._embedded.products;
                        return products.map(product => {
                            return {
                                ...pick(product, ['userId', 'name', 'category', 'imageUrl', 'description', 'price']),
                                id: product._links.self.href.replace(/^.+\//, '')}
                        });
                    })
                )
                .subscribe(products => this.products.next(products));
        } else {
            this.http.get<Product[]>(this.PRODUCTS_ENDPOINT)
                .subscribe(products => this.products.next(products))
        }
    }
}
