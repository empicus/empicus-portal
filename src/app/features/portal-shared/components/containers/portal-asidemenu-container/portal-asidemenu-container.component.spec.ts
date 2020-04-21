import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAsidemenuContainerComponent } from './portal-asidemenu-container.component';

describe('PortalAsidemenuContainerComponent', () => {
  let component: PortalAsidemenuContainerComponent;
  let fixture: ComponentFixture<PortalAsidemenuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAsidemenuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAsidemenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
