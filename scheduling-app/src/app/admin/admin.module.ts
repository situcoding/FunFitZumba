import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './login/login.component';
import { AdminRegisterComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent
    // Other components
  ],
  imports: [
    CommonModule,
    FormsModule, // Include FormsModule here for template-driven forms
    RouterModule.forChild([
      // Define your admin routes here
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'admin/register', component: AdminRegisterComponent }
         
      // Other routes
    ])
  ],
  providers: [
    // Any services or providers needed by this module
  ]
})
export class AdminModule { }
