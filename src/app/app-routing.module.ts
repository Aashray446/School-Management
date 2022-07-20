import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'create', component: SignInComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'admin', loadChildren : () => import('./admin/admin.module').then(mod=> mod.AdminModule)},
  {path: 'teacher-dashboard', loadChildren : () => import('./teacher/teacher.module').then(mod=> mod.TeacherModule)},
  {path: 'student-dashboard', loadChildren : () => import('./student/student.module').then(mod=> mod.StudentModule)},
  {path: 'accountancy-dashboard', loadChildren : () => import('./accountancy/accountancy.module').then(mod=> mod.AccountancyModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
