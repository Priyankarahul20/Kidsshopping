import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyoccationComponent } from './shopbyoccation.component';

describe('ShopbyoccationComponent', () => {
  let component: ShopbyoccationComponent;
  let fixture: ComponentFixture<ShopbyoccationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbyoccationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbyoccationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
