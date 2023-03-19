import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingStateButtonComponent } from './using-state-button.component';

describe('UsingStateButtonComponent', () => {
  let component: UsingStateButtonComponent;
  let fixture: ComponentFixture<UsingStateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingStateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingStateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
