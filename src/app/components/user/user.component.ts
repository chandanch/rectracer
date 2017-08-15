

import { Component, OnInit } from '@angular/core';
import { Address } from './address'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName : string;
  age : number;
  email : string;
  address : Address;
  hobbies : string[];

  constructor() { 
    this.userName = 'Chan'
  }

  ngOnInit() {
    this.age = 45;
    this.email = 'chan@techworld.io'
    this.address = {
      state : 'KA',
      city : 'Bangalore',
      street: 'sector 4, 11th phase, carson ridge reservior'
    }
    this.hobbies = ['coding','blogging','games'];
           
  }
}

