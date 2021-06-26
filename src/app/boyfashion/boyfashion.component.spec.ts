import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyfashionComponent } from './boyfashion.component';

describe('BoyfashionComponent', () => {
  let component: BoyfashionComponent;
  let fixture: ComponentFixture<BoyfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyfashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
