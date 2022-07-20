import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmFormComponent } from './student-adm-form.component';

describe('StudentAdmFormComponent', () => {
  let component: StudentAdmFormComponent;
  let fixture: ComponentFixture<StudentAdmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAdmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
