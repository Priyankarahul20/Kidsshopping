import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixyearComponent } from './sixyear.component';

describe('SixyearComponent', () => {
  let component: SixyearComponent;
  let fixture: ComponentFixture<SixyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
