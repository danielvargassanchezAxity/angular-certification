import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseClassExampleComponent } from './use-class-example.component';

describe('UseClassExampleComponent', () => {
  let component: UseClassExampleComponent;
  let fixture: ComponentFixture<UseClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseClassExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
