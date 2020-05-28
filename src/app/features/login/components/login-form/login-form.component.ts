import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { enterAnimation } from 'src/app/core/animations/enter.animation';
import { Api422Response } from 'src/app/core/models/api-422-response';

export interface LoginFormFields {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [enterAnimation],
})
export class LoginFormComponent implements OnInit, OnChanges {
  @Input() errorMessage: string;
  @Input() validationErrors: Api422Response;
  @Input() username: string;
  @Input() disabled: boolean;

  @Output() submitted = new EventEmitter<LoginFormFields>();

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.validationErrors) {
      this.setFormErrorsFromApiResponse(changes.validationErrors.currentValue);
    }
  }

  private setFormErrorsFromApiResponse(errors: Api422Response) {
    if (errors?.email) {
      this.form.get('username').setErrors({ api: errors.email });
    }
    if (errors?.password) {
      this.form.get('password').setErrors({ api: errors.password });
    }
  }

  public formSubmitted() {
    this.emitValidForm(
      this.form.get('username').value,
      this.form.get('password').value
    );
  }

  private emitValidForm(username: string, password: string): void {
    this.submitted.emit({ username, password });
  }
}
