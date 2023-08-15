import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
