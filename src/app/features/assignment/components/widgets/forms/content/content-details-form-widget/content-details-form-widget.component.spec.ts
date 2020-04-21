import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsFormWidgetComponent } from './content-details-form-widget.component';

describe('ContentDetailsFormWidgetComponent', () => {
  let component: ContentDetailsFormWidgetComponent;
  let fixture: ComponentFixture<ContentDetailsFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDetailsFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailsFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
