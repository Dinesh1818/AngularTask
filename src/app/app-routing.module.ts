import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleesComponent } from './enrollees/enrollees.component';
import { LoginComponent } from './login/login.component';
import { EditEnrolleeComponent } from './edit-enrollee/edit-enrollee.component';

const routes: Routes = [
  {path: 'enrollees', component: EnrolleesComponent},
  {path: 'login' , component : LoginComponent},
  {path : 'editEnrollee/:id',component:EditEnrolleeComponent},
  { path: '', redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
