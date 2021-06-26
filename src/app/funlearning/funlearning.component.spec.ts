import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunlearningComponent } from './funlearning.component';

describe('FunlearningComponent', () => {
  let component: FunlearningComponent;
  let fixture: ComponentFixture<FunlearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunlearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
