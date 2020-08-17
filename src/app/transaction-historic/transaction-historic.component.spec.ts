import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoricComponent } from './transaction-historic.component';

describe('TransactionHistoricComponent', () => {
  let component: TransactionHistoricComponent;
  let fixture: ComponentFixture<TransactionHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
