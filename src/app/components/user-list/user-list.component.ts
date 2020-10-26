import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/register/register.component';
import {RegisterService} from 'src/app/services/register.service'

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

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.registerService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
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

  searchTitle(): void {
    this.registerService.findByTitle(this.name)
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
