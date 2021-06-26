import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyoccationbComponent } from './shopbyoccationb.component';

describe('ShopbyoccationbComponent', () => {
  let component: ShopbyoccationbComponent;
  let fixture: ComponentFixture<ShopbyoccationbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbyoccationbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbyoccationbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
