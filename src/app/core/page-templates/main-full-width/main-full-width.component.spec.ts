import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFullWidthComponent } from './main-full-width.component';

describe('MainFullWidthComponent', () => {
  let component: MainFullWidthComponent;
  let fixture: ComponentFixture<MainFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
