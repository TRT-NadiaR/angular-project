import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

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
  submitted: boolean = false;
  buttonClicked: boolean = false;

 

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
          this.userName2 = this.loggedInAs.adult_first_name;
          this.submitted = true;
          this.buttonClicked = true;
        },
        error => {
          console.log(error);
        });
    }

 logout(): void {
   this.loggedIn = false;
   this.submitted = false;
   this.username = '';
   this.password = '';
   this.buttonClicked = false;
 }

}
