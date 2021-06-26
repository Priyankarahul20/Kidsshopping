import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneyearComponent } from './oneyear.component';

describe('OneyearComponent', () => {
  let component: OneyearComponent;
  let fixture: ComponentFixture<OneyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
