import { Injectable } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APP_TITLE } from 'src/app/core/config/app-config';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  TITLE = environment.production ? APP_TITLE : 'dev';
  SEPARATOR = ' | ';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  public init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        switchMap((route) => route.data),
        map((data) => {
          if (data.title) {
            // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
            return data.title;
          } else {
            // If not, we do a little magic on the url to create an approximation
            return this.router.url.split('/').reduce((acc, frag) => {
              if (acc && frag) {
                acc += this.SEPARATOR;
              }
              return this.router.url.split('/').reduce((acc, frag) => {
                if (acc && frag) {
                  acc += this.SEPARATOR;
                }
                return acc + this.ucFirst(frag);
              });
            });
          }
        })
      )
      .subscribe((pathString) =>
        this.titleService.setTitle(
          `${pathString} ${this.SEPARATOR} ${this.TITLE}`
        )
      );
  }

  public manuallySet(newTitle: string) {
    this.titleService.setTitle(`${newTitle} ${this.SEPARATOR} ${this.TITLE}`);
  }

  private ucFirst(str: string) {
    if (!str) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
