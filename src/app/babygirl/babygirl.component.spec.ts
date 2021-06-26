import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabygirlComponent } from './babygirl.component';

describe('BabygirlComponent', () => {
  let component: BabygirlComponent;
  let fixture: ComponentFixture<BabygirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabygirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabygirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
