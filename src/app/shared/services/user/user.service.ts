import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  LOCALSTORAGE_TOKEN_KEY,
  LOCALSTORAGE_USER_KEY,
} from 'src/app/core/config/app-config';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(
    this.defaultLoginStatus()
  );

  public user: BehaviorSubject<User> = new BehaviorSubject(
    this.fetchUserDetailsFromLocalstorage()
  );

  public authToken: BehaviorSubject<string> = new BehaviorSubject(
    this.fetchUserTokenFromLocalstorage()
  );

  private defaultLoginStatus(): boolean {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? true : false;
  }

  private fetchUserDetailsFromLocalstorage(): User {
    const stringifiedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);

    if (stringifiedUser) {
      return JSON.parse(stringifiedUser);
    } else {
      return null;
    }
  }

  private fetchUserTokenFromLocalstorage(): string {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }
}
