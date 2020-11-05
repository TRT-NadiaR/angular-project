import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string;
  pwd: string;
  
  constructor() { }

  login(){
    console.log('logged in')
  }
  ngOnInit(): void {
  }

  

  logout() {
   
  }

}
