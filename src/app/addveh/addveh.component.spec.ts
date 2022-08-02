import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehComponent } from './addveh.component';

describe('AddvehComponent', () => {
  let component: AddvehComponent;
  let fixture: ComponentFixture<AddvehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
