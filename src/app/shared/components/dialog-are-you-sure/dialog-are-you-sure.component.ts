import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  message: string;
  okButtonText: string;
}

@Component({
  selector: 'app-dialog-are-you-sure',
  templateUrl: './dialog-are-you-sure.component.html',
  styleUrls: ['./dialog-are-you-sure.component.scss'],
})
export class DialogAreYouSureComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    if (!this.data.title) {
      this.data.title = 'Are you sure?';
    }

    if (!this.data.okButtonText) {
      this.data.title = 'Yes';
    }
  }
}
