import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component'
import { CareersComponent} from './careers/careers.component'
import { AboutUsComponent} from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
