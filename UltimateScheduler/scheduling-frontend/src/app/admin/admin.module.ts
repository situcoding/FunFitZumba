import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminListComponent } from './admin-list/admin-list.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AdminListComponent, RegisterComponent],
  imports: [CommonModule, RouterModule], // Make sure to import RouterModule here
})
export class AdminModule {}
