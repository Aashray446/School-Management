import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHireFormComponent } from './teacher-hire-form.component';

describe('TeacherHireFormComponent', () => {
  let component: TeacherHireFormComponent;
  let fixture: ComponentFixture<TeacherHireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
