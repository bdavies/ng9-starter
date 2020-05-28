import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: TemplateMainComponent;
  let fixture: ComponentFixture<TemplateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateMainComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
