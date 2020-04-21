import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormWidgetComponent } from './invoice-form-widget.component';

describe('InvoiceFormWidgetComponent', () => {
  let component: InvoiceFormWidgetComponent;
  let fixture: ComponentFixture<InvoiceFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
