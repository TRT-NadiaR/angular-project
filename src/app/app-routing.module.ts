import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import{UserDetailsComponent} from './components/user-details/user-details.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import { AdminComponent } from './components/admin/admin.component';




const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path: 'register', component: AddUserComponent},
  {path: 'users/:id', component:UserDetailsComponent},
  {path: 'admin', component:AdminComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
