import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDataFormContainerComponent } from './academic-data-form-container.component';

describe('AcademicDataFormContainerComponent', () => {
  let component: AcademicDataFormContainerComponent;
  let fixture: ComponentFixture<AcademicDataFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicDataFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDataFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
