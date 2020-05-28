import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemsComponent } from './no-items.component';

describe('NoItemsComponent', () => {
  let component: NoItemsComponent;
  let fixture: ComponentFixture<NoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
