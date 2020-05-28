import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LOGIN_ROUTE } from '../config/app-config';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.isLoggedIn.pipe(
      map((res) => {
        if (!res) {
          this.router.navigate([LOGIN_ROUTE]);
        }
        return res;
      })
    );
  }
}
