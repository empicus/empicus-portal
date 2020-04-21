import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPortalLayoutContainerComponent } from './default-portal-layout-container.component';

describe('DefaultPortalLayoutContainerComponent', () => {
  let component: DefaultPortalLayoutContainerComponent;
  let fixture: ComponentFixture<DefaultPortalLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPortalLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPortalLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
