import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDataFormContainerComponent } from './content-data-form-container.component';

describe('ContentDataFormContainerComponent', () => {
  let component: ContentDataFormContainerComponent;
  let fixture: ComponentFixture<ContentDataFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDataFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDataFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
