import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import {StudentRoutingModule} from './student-routing.module'


@NgModule({
  declarations: [StudentPanelComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
