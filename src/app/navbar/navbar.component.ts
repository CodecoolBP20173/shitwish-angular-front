import {Component, OnDestroy, OnInit} from '@angular/core';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../auth/auth.service';
import {User} from '../models';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

    private userSub: Subscription;
    signinIcon = faSignInAlt;
    signOutIcon = faSignOutAlt;
    user: User;

    constructor(private authService: AuthService, private userService: UserService) {
    }

    ngOnInit() {
        this.userSub = this.userService.user.subscribe(user => this.user = user);
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}
