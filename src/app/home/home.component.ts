import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = "";
  telNumber: number;
  username: string;
  pwd: string;
  
  constructor() { }

  login(){
    console.log('logged in')
  }
  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  resetClicks() {
    this.clickCounter = 0;
  }

}
