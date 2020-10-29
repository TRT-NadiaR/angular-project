import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/services/register.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  user = {
    name: '', childName: '', published:false, username: '', parentLastName: '', childLastName: '', email: '', phoneHome: '', phoneMob:'', password: ''
  }

  submitted = false;
  loggedin = false;

  constructor(private registerService: RegisterService) { };


  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      childName: this.user.childName,
      username: this.user.username, 
      parentLastName: this.user.parentLastName,
      childLastName: this.user.childLastName,
      email: this.user.email,
      phoneHome: this.user.phoneHome,
      phoneMob: this.user.phoneMob,
      password: this.user.password
     
    };

    this.registerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      childName: '',
      published: false,
      username: '',
      parentLastName: '', 
      childLastName: '', 
      email: '', 
      phoneHome: '', 
      phoneMob:'',
      password: '',
     
    };
  }

  login(): void {
this.loggedin = true;
console.log('you logged in')
  }
  
}
