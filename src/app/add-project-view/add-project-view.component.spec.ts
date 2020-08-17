import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectViewComponent } from './add-project-view.component';

describe('AddProjectViewComponent', () => {
  let component: AddProjectViewComponent;
  let fixture: ComponentFixture<AddProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
