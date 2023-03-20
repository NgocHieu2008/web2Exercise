import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai23MathComponent } from './bai23-math.component';

describe('Bai23MathComponent', () => {
  let component: Bai23MathComponent;
  let fixture: ComponentFixture<Bai23MathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai23MathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai23MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
