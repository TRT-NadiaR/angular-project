import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ageOfChild = ["select age", '9 months','10 months','11 months', '1', '2', '3', '4'];
  model = new Child (18, '', "",this.ageOfChild[0], '', '');

  submitted = false;
  
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

  

  constructor() { }

  ngOnInit(): void {
  }

}
