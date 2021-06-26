import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfeedingComponent } from './foodfeeding.component';

describe('FoodfeedingComponent', () => {
  let component: FoodfeedingComponent;
  let fixture: ComponentFixture<FoodfeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodfeedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodfeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
