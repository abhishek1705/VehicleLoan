import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsuploadComponent } from './documentsupload.component';

describe('DocumentsuploadComponent', () => {
  let component: DocumentsuploadComponent;
  let fixture: ComponentFixture<DocumentsuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
