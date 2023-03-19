import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsBodyComponent } from './dvs-body.component';

describe('DvsBodyComponent', () => {
  let component: DvsBodyComponent;
  let fixture: ComponentFixture<DvsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
