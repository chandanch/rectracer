import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  public username : string;

  constructor() { 
    this.username = "Chan";
  }

}
