import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInfoFormContainerComponent } from './academic-info-form-container.component';

describe('AcademicInfoFormContainerComponent', () => {
  let component: AcademicInfoFormContainerComponent;
  let fixture: ComponentFixture<AcademicInfoFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicInfoFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicInfoFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
