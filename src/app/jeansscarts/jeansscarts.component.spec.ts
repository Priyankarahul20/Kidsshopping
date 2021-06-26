import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansscartsComponent } from './jeansscarts.component';

describe('JeansscartsComponent', () => {
  let component: JeansscartsComponent;
  let fixture: ComponentFixture<JeansscartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansscartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansscartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
