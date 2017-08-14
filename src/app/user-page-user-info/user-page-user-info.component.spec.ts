import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageUserInfoComponent } from './user-page-user-info.component';

describe('UserPageUserInfoComponent', () => {
  let component: UserPageUserInfoComponent;
  let fixture: ComponentFixture<UserPageUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
