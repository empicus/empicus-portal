import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoFormContainerComponent } from './content-info-form-container.component';

describe('ContentInfoFormContainerComponent', () => {
  let component: ContentInfoFormContainerComponent;
  let fixture: ComponentFixture<ContentInfoFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
