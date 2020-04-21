import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLandingContainerComponent } from './business-landing-container.component';

describe('BusinessLandingContainerComponent', () => {
  let component: BusinessLandingContainerComponent;
  let fixture: ComponentFixture<BusinessLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
