import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDetailsFormContainerComponent } from './academic-details-form-container.component';

describe('AcademicDetailsFormContainerComponent', () => {
  let component: AcademicDetailsFormContainerComponent;
  let fixture: ComponentFixture<AcademicDetailsFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicDetailsFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDetailsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
