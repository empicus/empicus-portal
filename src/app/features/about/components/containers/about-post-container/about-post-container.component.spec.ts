import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPostContainerComponent } from './about-post-container.component';

describe('AboutPostContainerComponent', () => {
  let component: AboutPostContainerComponent;
  let fixture: ComponentFixture<AboutPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
