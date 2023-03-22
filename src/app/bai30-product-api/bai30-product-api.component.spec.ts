import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai30ProductAPIComponent } from './bai30-product-api.component';

describe('Bai30ProductAPIComponent', () => {
  let component: Bai30ProductAPIComponent;
  let fixture: ComponentFixture<Bai30ProductAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai30ProductAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai30ProductAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
