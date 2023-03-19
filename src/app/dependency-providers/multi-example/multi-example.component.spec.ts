import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiExampleComponent } from './multi-example.component';

describe('MultiExampleComponent', () => {
  let component: MultiExampleComponent;
  let fixture: ComponentFixture<MultiExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
