import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceViewComponent } from './admin-space-view.component';

describe('AdminSpaceViewComponent', () => {
  let component: AdminSpaceViewComponent;
  let fixture: ComponentFixture<AdminSpaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpaceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
