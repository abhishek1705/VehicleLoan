import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddldComponent } from './addld.component';

describe('AddldComponent', () => {
  let component: AddldComponent;
  let fixture: ComponentFixture<AddldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
