import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopallbComponent } from './shopallb.component';

describe('ShopallbComponent', () => {
  let component: ShopallbComponent;
  let fixture: ComponentFixture<ShopallbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopallbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopallbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
