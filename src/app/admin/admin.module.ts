import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminTeacherProfileComponent } from './admin-teacher-profile/admin-teacher-profile.component';
import { AdminFinanceComponent } from './admin-finance/admin-finance.component';
import { AdminActivitiesComponent } from './admin-activities/admin-activities.component';
import {SFormModule} from './../s-form/s-form.module';

@NgModule({
  declarations: [DashboardComponent, AdminNavbarComponent, AdminFooterComponent, AdminPanelComponent, AdminTeachersComponent, AdminStudentsComponent, AdminEmployeeComponent, AdminTeacherProfileComponent, AdminFinanceComponent, AdminActivitiesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SFormModule
  ]
})
export class AdminModule { }
