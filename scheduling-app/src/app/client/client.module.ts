import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './list/client-list.component';
import { ClientCreateComponent } from './create/client-create.component';
import { ClientDetailComponent } from './detail/client-detail.component';
import { ClientLoginComponent } from './login/client-login.component';

const routes: Routes = [
  // Define your client-related routes here
];

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    ClientDetailComponent,
    ClientLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ClientCreateComponent] // Export components if needed by other modules
})
export class ClientModule { }
