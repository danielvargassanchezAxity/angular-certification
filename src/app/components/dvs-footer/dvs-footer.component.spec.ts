import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsFooterComponent } from './dvs-footer.component';

describe('DvsFooterComponent', () => {
  let component: DvsFooterComponent;
  let fixture: ComponentFixture<DvsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
