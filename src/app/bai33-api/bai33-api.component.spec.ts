import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai33ApiComponent } from './bai33-api.component';

describe('Bai33ApiComponent', () => {
  let component: Bai33ApiComponent;
  let fixture: ComponentFixture<Bai33ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai33ApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai33ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
