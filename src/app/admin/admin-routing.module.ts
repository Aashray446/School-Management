import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component'
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminTeacherProfileComponent } from './admin-teacher-profile/admin-teacher-profile.component';
import { AdminFinanceComponent } from './admin-finance/admin-finance.component';
import { AdminActivitiesComponent } from './admin-activities/admin-activities.component';


const routes: Routes = [
 {path: '' , component: DashboardComponent,
  children: [
    {path: 'dashboard', component: AdminPanelComponent},
    {path: 'teachers', component: AdminTeachersComponent},
    {path: 'students', component: AdminStudentsComponent},
    {path: 'employee', component: AdminEmployeeComponent},
    {path: 'teacher-profile', component: AdminTeacherProfileComponent},
    {path: 'finance' , component: AdminFinanceComponent},
    {path: 'activities', component : AdminActivitiesComponent},
    {path: '' , redirectTo: 'dashboard', pathMatch: 'full'},

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
