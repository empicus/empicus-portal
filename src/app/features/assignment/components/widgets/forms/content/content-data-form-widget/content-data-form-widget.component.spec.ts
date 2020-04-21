import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDataFormWidgetComponent } from './content-data-form-widget.component';

describe('ContentDataFormWidgetComponent', () => {
  let component: ContentDataFormWidgetComponent;
  let fixture: ComponentFixture<ContentDataFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDataFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDataFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
