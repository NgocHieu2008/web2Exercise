import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai32BitcoinComponent } from './bai32-bitcoin.component';

describe('Bai32BitcoinComponent', () => {
  let component: Bai32BitcoinComponent;
  let fixture: ComponentFixture<Bai32BitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai32BitcoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai32BitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
