import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai16ProductHttpErrorComponent } from './bai16-product-http-error.component';

describe('Bai16ProductHttpErrorComponent', () => {
  let component: Bai16ProductHttpErrorComponent;
  let fixture: ComponentFixture<Bai16ProductHttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai16ProductHttpErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai16ProductHttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
