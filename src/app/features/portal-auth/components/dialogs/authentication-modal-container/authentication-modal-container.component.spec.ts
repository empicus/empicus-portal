import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationModalContainerComponent } from './authentication-modal-container.component';

describe('AuthenticationModalContainerComponent', () => {
  let component: AuthenticationModalContainerComponent;
  let fixture: ComponentFixture<AuthenticationModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
