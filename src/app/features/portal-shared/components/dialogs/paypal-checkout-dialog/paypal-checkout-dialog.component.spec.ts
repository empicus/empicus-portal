import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalCheckoutDialogComponent } from './paypal-checkout-dialog.component';

describe('PaypalCheckoutDialogComponent', () => {
  let component: PaypalCheckoutDialogComponent;
  let fixture: ComponentFixture<PaypalCheckoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalCheckoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalCheckoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
