import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostContainerComponent } from './blog-post-container.component';

describe('BlogPostContainerComponent', () => {
  let component: BlogPostContainerComponent;
  let fixture: ComponentFixture<BlogPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
