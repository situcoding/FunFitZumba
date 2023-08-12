import { Component } from '@angular/core';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent {

  loginData = {
    username: '',
    password: ''
  };
   
  onLoginSubmit() {
    // Handle login submission logic here
  }

}
