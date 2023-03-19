import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsHeaderComponent } from './dvs-header.component';

describe('DvsHeaderComponent', () => {
  let component: DvsHeaderComponent;
  let fixture: ComponentFixture<DvsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
