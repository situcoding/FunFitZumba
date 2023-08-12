import { Component } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html'
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
      localStorage.setItem('adminToken', response.token);
      this.router.navigate(['/admin/dashboard']);
    }, error => {
      console.log('Login Error', error);
      this.errorMessage = error.error.message || 'Login failed. Please try again.';
    });
  }
}
