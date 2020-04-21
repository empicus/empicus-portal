import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalLandingContainerComponent } from './portal-landing-container.component';

describe('PortalLandingContainerComponent', () => {
  let component: PortalLandingContainerComponent;
  let fixture: ComponentFixture<PortalLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
