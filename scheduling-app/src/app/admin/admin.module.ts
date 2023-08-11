import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './login/login.component';
import { AdminRegisterComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRegisterComponent
  ],
  exports: [
    AdminLoginComponent,
    AdminRegisterComponent
  ]
})
export class AdminModule { }
