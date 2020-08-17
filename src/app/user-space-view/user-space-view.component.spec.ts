import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpaceViewComponent } from './user-space-view.component';

describe('UserSpaceViewComponent', () => {
  let component: UserSpaceViewComponent;
  let fixture: ComponentFixture<UserSpaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpaceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
