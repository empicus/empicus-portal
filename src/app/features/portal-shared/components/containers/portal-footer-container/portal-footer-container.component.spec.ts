import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalFooterContainerComponent } from './portal-footer-container.component';


describe('PortalFooterContainerComponent', () => {
  let component: PortalFooterContainerComponent;
  let fixture: ComponentFixture<PortalFooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalFooterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
