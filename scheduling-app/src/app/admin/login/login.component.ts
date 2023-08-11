import { Component } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {NgModule} from "@angular/core"

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html'
})
export class AdminLoginComponent {
  public loginData = {
    username: '',
    password: ''
  };

  public errorMessage: string = '';

  constructor(private adminUserService: AdminUserService, private router: Router) { }

  onLoginSubmit() {
    this.adminUserService.loginAdminUser(this.loginData).subscribe(response => {
      console.log('Login successful', response);
      // Store the token or other relevant data
      localStorage.setItem('adminToken', response.token); // Assuming response has a token property
      // Redirect to the dashboard or wherever you like
      this.router.navigate(['/admin/dashboard']);
    }, error => {
      console.log('Login Error', error);
      // Here, you can set a user-friendly error message
      this.errorMessage = error.error.message || 'Login failed. Please try again.';
    });
  }
}

@NgModule({
  declarations: [
    AdminLoginComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule  // Ensure FormsModule is added to the imports array
  ],
  exports: [
    AdminLoginComponent,
    
  ]
})
export class AdminModule { }