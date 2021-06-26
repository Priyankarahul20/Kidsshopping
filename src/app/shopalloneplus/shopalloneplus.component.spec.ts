import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopalloneplusComponent } from './shopalloneplus.component';

describe('ShopalloneplusComponent', () => {
  let component: ShopalloneplusComponent;
  let fixture: ComponentFixture<ShopalloneplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopalloneplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopalloneplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
