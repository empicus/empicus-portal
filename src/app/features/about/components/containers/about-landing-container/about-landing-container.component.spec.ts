import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLandingContainerComponent } from './about-landing-container.component';

describe('AboutLandingContainerComponent', () => {
  let component: AboutLandingContainerComponent;
  let fixture: ComponentFixture<AboutLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
