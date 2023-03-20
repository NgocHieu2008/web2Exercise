import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai17CustomerComponent } from './bai17-customer.component';

describe('Bai17CustomerComponent', () => {
  let component: Bai17CustomerComponent;
  let fixture: ComponentFixture<Bai17CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai17CustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai17CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
