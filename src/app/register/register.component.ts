import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ageOfChild = ["select age", '9 months','10 months','11 months', '1', '2', '3', '4']


  model = new Child (18, 'parent name here', "child name here",this.ageOfChild[0], 'home number', 'mobile number');
  submitted = false;
  
  onSubmit() { 
    this.submitted = true; 
  }

  get diagnostic() { 
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
