import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPostContainerComponent } from './questions-post-container.component';

describe('QuestionsPostContainerComponent', () => {
  let component: QuestionsPostContainerComponent;
  let fixture: ComponentFixture<QuestionsPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
