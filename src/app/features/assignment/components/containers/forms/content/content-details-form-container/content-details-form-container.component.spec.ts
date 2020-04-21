import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsFormContainerComponent } from './content-details-form-container.component';

describe('ContentDetailsFormContainerComponent', () => {
  let component: ContentDetailsFormContainerComponent;
  let fixture: ComponentFixture<ContentDetailsFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDetailsFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
