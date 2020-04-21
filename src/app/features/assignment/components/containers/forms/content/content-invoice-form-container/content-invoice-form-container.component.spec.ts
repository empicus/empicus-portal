import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInvoiceFormContainerComponent } from './content-invoice-form-container.component';

describe('ContentInvoiceFormContainerComponent', () => {
  let component: ContentInvoiceFormContainerComponent;
  let fixture: ComponentFixture<ContentInvoiceFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInvoiceFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInvoiceFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
