import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai31FakeproductComponent } from './bai31-fakeproduct.component';

describe('Bai31FakeproductComponent', () => {
  let component: Bai31FakeproductComponent;
  let fixture: ComponentFixture<Bai31FakeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai31FakeproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai31FakeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
