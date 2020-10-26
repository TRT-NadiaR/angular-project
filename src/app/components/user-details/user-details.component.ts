import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/services/register.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  currentUser = null;
  message = '';


  constructor(private registerService: RegisterService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.registerService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      name: this.currentUser.name,
      childName: this.currentUser.childName,
      published: status
    };
  
    this.registerService.update(this.currentUser.id, data)
        .subscribe(
          response => {
            this.currentUser.published = status;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }

    updateUser(): void {
      this.registerService.update(this.currentUser.id, this.currentUser)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The user was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }
  
    deleteUser(): void {
      this.registerService.delete(this.currentUser.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/users']);
          },
          error => {
            console.log(error);
          });
    }
}


