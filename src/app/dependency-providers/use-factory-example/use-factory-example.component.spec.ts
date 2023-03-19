import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryExampleComponent } from './use-factory-example.component';

describe('UseFactoryExampleComponent', () => {
  let component: UseFactoryExampleComponent;
  let fixture: ComponentFixture<UseFactoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFactoryExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFactoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
