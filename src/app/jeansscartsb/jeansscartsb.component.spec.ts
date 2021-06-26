import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansscartsbComponent } from './jeansscartsb.component';

describe('JeansscartsbComponent', () => {
  let component: JeansscartsbComponent;
  let fixture: ComponentFixture<JeansscartsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansscartsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansscartsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
