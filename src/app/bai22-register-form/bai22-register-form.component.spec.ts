import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai22RegisterFormComponent } from './bai22-register-form.component';

describe('Bai22RegisterFormComponent', () => {
  let component: Bai22RegisterFormComponent;
  let fixture: ComponentFixture<Bai22RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai22RegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai22RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
