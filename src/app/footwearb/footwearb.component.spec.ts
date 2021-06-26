import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearbComponent } from './footwearb.component';

describe('FootwearbComponent', () => {
  let component: FootwearbComponent;
  let fixture: ComponentFixture<FootwearbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootwearbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
