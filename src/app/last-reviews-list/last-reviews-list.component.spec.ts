import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReviewsListComponent } from './last-reviews-list.component';

describe('LastReviewsListComponent', () => {
  let component: LastReviewsListComponent;
  let fixture: ComponentFixture<LastReviewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReviewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
