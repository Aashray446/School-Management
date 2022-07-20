import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { StudentPanelComponent} from './student-panel/student-panel.component';


const routes : Routes = [
  {path: '' , component: StudentPanelComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
