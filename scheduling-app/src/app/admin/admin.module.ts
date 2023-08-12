import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './login/admin-login.component';
import { AdminRegisterComponent } from './registration/admin-registration.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';

const routes: Routes = [
  // Define your admin-related routes here
];

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent,
    ManageScheduleComponent,
    ViewMeetingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [] // Export components if needed by other modules
})
export class AdminModule { }
