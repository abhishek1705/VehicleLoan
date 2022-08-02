import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailedComponent } from './application-detailed.component';

describe('ApplicationDetailedComponent', () => {
  let component: ApplicationDetailedComponent;
  let fixture: ComponentFixture<ApplicationDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
