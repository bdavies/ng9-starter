import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isLoggedIn = this.userService.isLoggedIn.getValue();

    if (isLoggedIn) {
      const token = this.userService.authToken.getValue();

      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const authReq = request.clone({
          setHeaders: headers,
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
      }
    }

    return next.handle(request);
  }
}
