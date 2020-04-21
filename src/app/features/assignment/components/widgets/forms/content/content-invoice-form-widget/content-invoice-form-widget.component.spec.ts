import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInvoiceFormWidgetComponent } from './content-invoice-form-widget.component';

describe('ContentInvoiceFormWidgetComponent', () => {
  let component: ContentInvoiceFormWidgetComponent;
  let fixture: ComponentFixture<ContentInvoiceFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInvoiceFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInvoiceFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
