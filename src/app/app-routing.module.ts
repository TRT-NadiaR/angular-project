import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import{UserDetailsComponent} from './components/user-details/user-details.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {UserListComponent} from './components/user-list/user-list.component';



const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path: 'add', component: AddUserComponent},
  {path: 'users/:id', component:UserDetailsComponent},
  {path: 'login', component: UserListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
