import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTemplatesComponent } from './reference-templates.component';

describe('ReferenceTemplatesComponent', () => {
  let component: ReferenceTemplatesComponent;
  let fixture: ComponentFixture<ReferenceTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
