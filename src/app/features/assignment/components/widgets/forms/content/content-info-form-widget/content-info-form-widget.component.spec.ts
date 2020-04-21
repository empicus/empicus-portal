import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoFormWidgetComponent } from './content-info-form-widget.component';

describe('ContentInfoFormWidgetComponent', () => {
  let component: ContentInfoFormWidgetComponent;
  let fixture: ComponentFixture<ContentInfoFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
