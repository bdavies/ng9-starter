import { Component, OnInit } from '@angular/core';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      path: '/first',
      label: 'Nav link',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
