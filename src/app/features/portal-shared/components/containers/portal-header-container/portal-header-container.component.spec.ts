import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalHeaderContainerComponent } from './portal-header-container.component';


describe('PortalHeaderContainerComponent', () => {
  let component: PortalHeaderContainerComponent;
  let fixture: ComponentFixture<PortalHeaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalHeaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
