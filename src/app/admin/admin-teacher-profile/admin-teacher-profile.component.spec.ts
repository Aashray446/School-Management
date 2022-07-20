import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherProfileComponent } from './admin-teacher-profile.component';

describe('AdminTeacherProfileComponent', () => {
  let component: AdminTeacherProfileComponent;
  let fixture: ComponentFixture<AdminTeacherProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
