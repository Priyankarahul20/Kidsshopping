import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedecorationComponent } from './homedecoration.component';

describe('HomedecorationComponent', () => {
  let component: HomedecorationComponent;
  let fixture: ComponentFixture<HomedecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedecorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
