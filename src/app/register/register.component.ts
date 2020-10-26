import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import {RegisterService} from 'src/app/services/register.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ageOfChild = ["select age", '9 months','10 months','11 months', '1', '2', '3', '4'];
  model = new Child (18, '', "",this.ageOfChild[0], '', '');

  register = {
    name: '', childName: '', phoneMobile:''
  }

  submitted = false;

  constructor(private registerService: RegisterService) { };

  saveTutorial(): void {
    const data = {
      title: this.register.name,
      description: this.register.childName, 
      phoneMobile: this.register.phoneMobile
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

  newTutorial(): void {
    this.submitted = false;
    this.register = {
      name: '',
      childName: '',
      phoneMobile: ''
    };
  }



  
  onSubmit() { 
    this.submitted = true; 
    console.log("model", this.model)
    localStorage.setItem('testObject', JSON.stringify(this.model));

    // let retrievedObject = localStorage.getItem('this.model');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

  newChild() {
    this.model = new Child(10, '', '', '', '', '');

  }

  get diagnostic() { 
    return JSON.stringify(this.model);
   
  }

  ngOnInit(): void {
  }

}
