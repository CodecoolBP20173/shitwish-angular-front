import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private readonly USERS_ENDPOINT = 'https://shitwish-user-service-bp20173.herokuapp.com/users';
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) { }

    getUserProfile() {
        this.http.get<User>(this.USERS_ENDPOINT).subscribe(user => {
            this.user.next(user);
            console.log(user);
        });
    }

    removeUserProfile() {
        this.user.next(null);
    }
}
