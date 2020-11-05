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
          
          console.log(this.userName2, 'username2')
          console.log(this.loggedInAs, 'logged in info')
          console.log(this.loggedIn)
        },
        error => {
          console.log(error);
        });
    }

 

}
