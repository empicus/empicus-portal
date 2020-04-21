import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalCheckoutWidgetComponent } from './paypal-checkout-widget.component';

describe('PaypalCheckoutWidgetComponent', () => {
  let component: PaypalCheckoutWidgetComponent;
  let fixture: ComponentFixture<PaypalCheckoutWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalCheckoutWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalCheckoutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
