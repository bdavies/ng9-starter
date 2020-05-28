import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveIconComponent } from './interactive-icon.component';

describe('InteractiveIconComponent', () => {
  let component: InteractiveIconComponent;
  let fixture: ComponentFixture<InteractiveIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
