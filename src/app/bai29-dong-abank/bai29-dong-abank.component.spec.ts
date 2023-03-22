import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai29DongABankComponent } from './bai29-dong-abank.component';

describe('Bai29DongABankComponent', () => {
  let component: Bai29DongABankComponent;
  let fixture: ComponentFixture<Bai29DongABankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai29DongABankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai29DongABankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
