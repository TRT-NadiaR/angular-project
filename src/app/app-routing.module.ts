import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { CareersComponent} from './careers/careers.component'
import { AboutUsComponent} from './about-us/about-us.component'
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'


const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path: "about", component: AboutUsComponent}, 
  {path: "careers", component: CareersComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
