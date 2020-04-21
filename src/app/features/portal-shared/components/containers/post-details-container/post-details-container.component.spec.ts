import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsContainerComponent } from './post-details-container.component';

describe('PostDetailsContainerComponent', () => {
  let component: PostDetailsContainerComponent;
  let fixture: ComponentFixture<PostDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
