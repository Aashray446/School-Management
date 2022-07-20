import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {TeacherPanelComponent} from './teacher-panel/teacher-panel.component'

const routes : Routes = [
  {path: '', component: TeacherPanelComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
