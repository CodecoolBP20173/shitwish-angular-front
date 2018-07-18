import {Component, OnInit} from '@angular/core';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    faSignInAlt = faSignInAlt;

    constructor() {
    }

    ngOnInit() {
    }
}
