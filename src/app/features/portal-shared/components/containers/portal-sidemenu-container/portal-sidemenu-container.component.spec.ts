import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSidemenuContainerComponent } from './portal-sidemenu-container.component';

describe('PortalSidemenuContainerComponent', () => {
  let component: PortalSidemenuContainerComponent;
  let fixture: ComponentFixture<PortalSidemenuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalSidemenuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSidemenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
