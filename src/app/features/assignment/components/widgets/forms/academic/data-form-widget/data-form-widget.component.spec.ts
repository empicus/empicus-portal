import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormWidgetComponent } from './data-form-widget.component';

describe('DataFormWidgetComponent', () => {
  let component: DataFormWidgetComponent;
  let fixture: ComponentFixture<DataFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
