import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai15ProductHttpComponent } from './bai15-product-http.component';

describe('Bai15ProductHttpComponent', () => {
  let component: Bai15ProductHttpComponent;
  let fixture: ComponentFixture<Bai15ProductHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai15ProductHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai15ProductHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
