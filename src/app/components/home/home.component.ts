import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/services/register.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
 
  constructor(private registerService: RegisterService) { }


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


  ngOnInit(): void {
  }

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
