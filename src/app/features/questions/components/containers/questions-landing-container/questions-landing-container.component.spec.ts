import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsLandingContainerComponent } from './questions-landing-container.component';

describe('QuestionsLandingContainerComponent', () => {
  let component: QuestionsLandingContainerComponent;
  let fixture: ComponentFixture<QuestionsLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
