import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai18ListCustomerComponent } from './bai18-list-customer.component';

describe('Bai18ListCustomerComponent', () => {
  let component: Bai18ListCustomerComponent;
  let fixture: ComponentFixture<Bai18ListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai18ListCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai18ListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
