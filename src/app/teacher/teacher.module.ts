import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherRoutingModule} from './teacher-routing.module';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component'


@NgModule({
  declarations: [TeacherPanelComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
