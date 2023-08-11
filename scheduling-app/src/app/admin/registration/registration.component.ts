import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class AdminRegisterComponent {
  adminData = {
    username: '',
    email: '',
    password: ''
  };

  onFormSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log(this.adminData); // For demonstration purposes
      // Your form submission logic here
    }
  }
}
