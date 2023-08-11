import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/login/login.component';
import { AdminRegisterComponent } from './admin/registration/registration.component';
import { CreateComponent } from './client/create/create.component'; // Importing the CreateComponent

const routes: Routes = [ 
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/register', component: AdminRegisterComponent }, // changed 'registration' to 'register' for consistency
  { path: 'create', component: CreateComponent }, // New route definition for CreateComponent
  // You can add more routes here as needed
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' }, // Default route that redirects to admin login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
