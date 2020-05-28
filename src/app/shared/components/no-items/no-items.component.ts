import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-items',
  templateUrl: './no-items.component.html',
  styleUrls: ['./no-items.component.scss'],
})
export class NoItemsComponent implements OnInit {
  @Input() item: string;

  constructor() {}

  ngOnInit(): void {}
}
