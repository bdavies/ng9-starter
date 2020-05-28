import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: TemplateLoginComponent;
  let fixture: ComponentFixture<TemplateLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateLoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
