import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysafetyComponent } from './bodysafety.component';

describe('BodysafetyComponent', () => {
  let component: BodysafetyComponent;
  let fixture: ComponentFixture<BodysafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodysafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodysafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
