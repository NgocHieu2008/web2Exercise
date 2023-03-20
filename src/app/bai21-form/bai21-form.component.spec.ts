import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai21FormComponent } from './bai21-form.component';

describe('Bai21FormComponent', () => {
  let component: Bai21FormComponent;
  let fixture: ComponentFixture<Bai21FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai21FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai21FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
