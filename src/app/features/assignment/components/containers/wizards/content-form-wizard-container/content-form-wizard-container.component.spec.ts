import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormWizardContainerComponent } from './content-form-wizard-container.component';

describe('ContentFormWizardContainerComponent', () => {
  let component: ContentFormWizardContainerComponent;
  let fixture: ComponentFixture<ContentFormWizardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFormWizardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
