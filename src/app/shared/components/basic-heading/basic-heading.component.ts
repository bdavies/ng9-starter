import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-heading',
  templateUrl: './basic-heading.component.html',
  styleUrls: ['./basic-heading.component.scss'],
})
export class BasicHeadingComponent implements OnInit {
  @Input() heading: string;
  @Input() buttonText: string;

  @Output() buttonClicked: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
