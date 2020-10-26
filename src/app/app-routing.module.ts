import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {HomeComponent} from './home/home.component'
// import { CareersComponent} from './careers/careers.component'
// import { AboutUsComponent} from './about-us/about-us.component'
// import { RegisterComponent } from './register/register.component';
// import {LoginComponent} from './login/login.component'
import{UserDetailsComponent} from './components/user-details/user-details.component'
import {AddUserComponent} from './components/add-user/add-user.component'
import {UserListComponent} from './components/user-list/user-list.component'


const routes: Routes = [
  // {path: "", component:HomeComponent}, 
  // {path: "about", component: AboutUsComponent}, 
  // {path: "careers", component: CareersComponent},
  // {path: "register", component: RegisterComponent},
  // {path: "**", component: LoginComponent},
  {path: '', redirectTo: 'users', pathMatch:'full'},
  {path: 'add', component: AddUserComponent},
  {path: 'users/:id', component:UserDetailsComponent},
  {path: 'users', component: UserListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
