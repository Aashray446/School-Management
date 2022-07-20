import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { StudentAdmFormComponent } from './student-adm-form/student-adm-form.component';
import { TeacherHireFormComponent } from './teacher-hire-form/teacher-hire-form.component';
import { NoticesComponent } from './notices/notices.component';
import { ResultComponent } from './result/result.component';
import { EventsComponent } from './events/events.component'


@NgModule({
  declarations: [StudentAdmFormComponent, TeacherHireFormComponent, NoticesComponent, ResultComponent, EventsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:      [TeacherHireFormComponent, StudentAdmFormComponent, FormsModule, NoticesComponent, ResultComponent, EventsComponent ]
})
export class SFormModule {
}
