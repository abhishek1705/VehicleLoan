import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanschemeComponent } from './loanscheme.component';

describe('LoanschemeComponent', () => {
  let component: LoanschemeComponent;
  let fixture: ComponentFixture<LoanschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
