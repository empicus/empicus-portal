import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormWidgetComponent } from './detail-form-widget.component';

describe('DetailFormWidgetComponent', () => {
  let component: DetailFormWidgetComponent;
  let fixture: ComponentFixture<DetailFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
