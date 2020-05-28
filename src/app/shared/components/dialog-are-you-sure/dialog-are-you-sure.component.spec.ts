import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAreYouSureComponent } from './dialog-are-you-sure.component';

describe('DialogAreYouSureComponent', () => {
  let component: DialogAreYouSureComponent;
  let fixture: ComponentFixture<DialogAreYouSureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAreYouSureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAreYouSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
