import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, startWith } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {
  LOGIN_SUCCESS_REDIRECT,
  LOCALSTORAGE_TOKEN_KEY,
  LOCALSTORAGE_USER_KEY,
} from 'src/app/core/config/app-config';
import { LOGIN_ROUTE } from 'src/app/core/config/app-config';
import { resolveApiRoute } from 'src/app/core/apiRouteResolution';
import { LoginApiRequest } from '../../models/login-api-request';
import { LoginApiResponse } from '../../models/login-api-response';
import { User } from 'src/app/core/models/user';
import { ApiResponse, ContentState } from 'src/app/core/models/api-response';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private LOGIN_ROUTE = LOGIN_ROUTE;

  private loginApiRoute = resolveApiRoute('/login');

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public login(
    username: string,
    password: string
  ): Observable<ApiResponse<string | HttpErrorResponse>> {
    const payload: LoginApiRequest = {
      email: username,
      password,
      device_name: this.generateDeviceName(),
    };

    return this.http.post(this.loginApiRoute, payload).pipe(
      map((res: LoginApiResponse) => {
        if (res.token) {
          this.loginSuccess(res.token, res.user);
          return {
            state: ContentState.LOADED,
            result: res.token,
          };
        }
      }),
      startWith({ state: ContentState.LOADING }),
      catchError((e: HttpErrorResponse) =>
        of({ state: ContentState.ERROR, message: e.message, result: e })
      )
    );
  }

  private loginSuccess(token: string, user: User): void {
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));

    this.userService.isLoggedIn.next(true);
    this.userService.authToken.next(token);
    this.userService.user.next(user);

    this.router.navigate([LOGIN_SUCCESS_REDIRECT]);
  }

  private generateDeviceName(): string {
    return 'webapp';
  }

  public logout(): void {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);

    this.userService.isLoggedIn.next(false);
    this.userService.user.next(null);
    this.userService.authToken.next(null);

    this.router.navigate([LOGIN_ROUTE]);
  }
}
