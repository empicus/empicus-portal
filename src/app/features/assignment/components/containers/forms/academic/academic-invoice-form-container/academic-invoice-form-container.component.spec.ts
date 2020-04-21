import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInvoiceFormContainerComponent } from './academic-invoice-form-container.component';

describe('AcademicInvoiceFormContainerComponent', () => {
  let component: AcademicInvoiceFormContainerComponent;
  let fixture: ComponentFixture<AcademicInvoiceFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicInvoiceFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicInvoiceFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
