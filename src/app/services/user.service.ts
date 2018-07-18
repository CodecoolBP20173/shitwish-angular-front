import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private readonly USERS_ENDPOINT = '';
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) { }

    getUserProfile() {
        this.http.get<User>(this.USERS_ENDPOINT).subscribe(user => this.user.next(user));
    }

    removeUserProfile() {
        this.user.next(null);
    }
}
