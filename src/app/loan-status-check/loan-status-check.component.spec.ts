import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStatusCheckComponent } from './loan-status-check.component';

describe('LoanStatusCheckComponent', () => {
  let component: LoanStatusCheckComponent;
  let fixture: ComponentFixture<LoanStatusCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanStatusCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanStatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
