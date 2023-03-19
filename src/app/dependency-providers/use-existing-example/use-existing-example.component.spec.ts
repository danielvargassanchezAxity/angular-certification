import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseExistingExampleComponent } from './use-existing-example.component';

describe('UseExistingExampleComponent', () => {
  let component: UseExistingExampleComponent;
  let fixture: ComponentFixture<UseExistingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseExistingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseExistingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
