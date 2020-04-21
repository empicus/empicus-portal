import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPostContainerComponent } from './business-post-container.component';

describe('BusinessPostContainerComponent', () => {
  let component: BusinessPostContainerComponent;
  let fixture: ComponentFixture<BusinessPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
