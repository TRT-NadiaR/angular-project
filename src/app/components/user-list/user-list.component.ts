import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/register/register.component';
import {RegisterService} from 'src/app/services/register.service'
//import { NgxPasswordToggleModule } from 'ngx-password-toggle'




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;
  currentUsers = null;
  currentIndex = -1;
  name = '';
  loggedIn: boolean = false;
  username = '';
  password = '';
  loggedInUser: any;
  loggedInAs = null;
  userName2 = String;
  
  
constructor(private registerService: RegisterService) { }

// userInfo(): void {
//   document.getElementById("userInfo").innerHTML = "Hello JavaScript!";
// }

 
login(): void {
console.log('in login function')
const data = {
  username: this.username, 
  password: this.password
};

this.registerService.checkLoginDetails(data)
  .subscribe(
    response => {
      console.log(response, 'response in function ');
      this.loggedIn = true;
      this.loggedInAs = response.status;

      //console.log(this.userName2, 'username2')
      console.log(this.loggedInAs, 'logged in info')
      console.log(this.loggedIn)
    },
    error => {
      console.log(error);
    });
}

  onSelect(user): void {
    this.currentUsers = user;
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  searchAll(): void {
    this.registerService.getAll()
    .subscribe(
      data => {
        this.users = data;
        console.log('data retrieved from getAll',data);
      },
      error => {
        console.log(error);
      });
  }

 

  retrieveUsers(): void {
    this.registerService.getAll()
      .subscribe(
        data => {
          this.users = data;
          //console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.searchAll();
    this.currentUsers = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUsers = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.registerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    console.log('in searchName function')
    console.log(this.users, 'users')
    console.log(this.name, 'name')
    this.registerService.findByName(this.name)
      .subscribe(
        data => {
          this.users = data;
          
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
