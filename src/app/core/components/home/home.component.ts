import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/features/login/services/login/login.service';
import { Router } from '@angular/router';
import {
  LOGIN_ROUTE,
  LOGIN_SUCCESS_REDIRECT,
} from 'src/app/core/config/app-config';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private LOGIN_ROUTE = LOGIN_ROUTE;
  private LOGIN_SUCCESS_REDIRECT = LOGIN_SUCCESS_REDIRECT;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.userService.isLoggedIn.subscribe((res) => {
      if (res) {
        this.redirectToLoggedIn();
      } else {
        this.redirectToLoginPage();
      }
    });
  }

  private redirectToLoginPage() {
    this.router.navigate([LOGIN_ROUTE]);
  }

  private redirectToLoggedIn() {
    this.router.navigate([LOGIN_SUCCESS_REDIRECT]);
  }
}
