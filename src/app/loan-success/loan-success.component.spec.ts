import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSuccessComponent } from './loan-success.component';

describe('LoanSuccessComponent', () => {
  let component: LoanSuccessComponent;
  let fixture: ComponentFixture<LoanSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
