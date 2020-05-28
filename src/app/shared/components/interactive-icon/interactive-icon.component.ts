import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interactive-icon',
  templateUrl: './interactive-icon.component.html',
  styleUrls: ['./interactive-icon.component.scss'],
})
export class InteractiveIconComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' | 'white';
  @Input() icon: string; // a material icon icon name
  @Input() hoverBackground: boolean;
  @Input() stopPropagation: boolean;

  @Output() clicked: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  iconClicked(event: MouseEvent): void {
    if (this.stopPropagation) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.clicked.emit();
  }
}
