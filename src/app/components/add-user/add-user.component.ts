import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/services/register.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  user = {
    name: '', childName: '', published:false
  }

  submitted = false;

  constructor(private registerService: RegisterService) { };


  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      childName: this.user.childName
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
      published: false
    };
  }
}
