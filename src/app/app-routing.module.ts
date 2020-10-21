import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { CareersComponent} from './careers/careers.component'
import { AboutUsComponent} from './about-us/about-us.component'


const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path: "about", component: AboutUsComponent}, 
  {path: "careers", component: CareersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
