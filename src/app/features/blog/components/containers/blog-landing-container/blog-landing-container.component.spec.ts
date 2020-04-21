import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingContainerComponent } from './blog-landing-container.component';

describe('BlogLandingContainerComponent', () => {
  let component: BlogLandingContainerComponent;
  let fixture: ComponentFixture<BlogLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
