import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainwearComponent } from './rainwear.component';

describe('RainwearComponent', () => {
  let component: RainwearComponent;
  let fixture: ComponentFixture<RainwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
