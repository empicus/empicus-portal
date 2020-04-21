import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormWidgetComponent } from './info-form-widget.component';

describe('InfoFormWidgetComponent', () => {
  let component: InfoFormWidgetComponent;
  let fixture: ComponentFixture<InfoFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
