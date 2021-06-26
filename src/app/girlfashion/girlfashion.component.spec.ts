import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlfashionComponent } from './girlfashion.component';

describe('GirlfashionComponent', () => {
  let component: GirlfashionComponent;
  let fixture: ComponentFixture<GirlfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlfashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
