import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService]
})
export class AppComponent {
  title = 'Retracer App';
  private username : string;
  constructor(private userService : UserServiceService) {
    this.changeUserName();
  }

  changeUserName() {
    setTimeout(() => {
      this.username = this.userService.username;  
    }, 3000);
  }
}
