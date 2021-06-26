import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixplusyearComponent } from './sixplusyear.component';

describe('SixplusyearComponent', () => {
  let component: SixplusyearComponent;
  let fixture: ComponentFixture<SixplusyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixplusyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixplusyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
