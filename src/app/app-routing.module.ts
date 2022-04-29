import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './component/courses/courses.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
