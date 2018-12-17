import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedAuthorsComponent } from './recommended-authors.component';

describe('RecommendedAuthorsComponent', () => {
  let component: RecommendedAuthorsComponent;
  let fixture: ComponentFixture<RecommendedAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
