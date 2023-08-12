import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/login/admin-login.component';
import { AdminRegisterComponent } from './admin/registration/admin-registration.component'; // Corrected path to register component
import { ClientCreateComponent } from './client/create/client-create.component';
import { ClientLoginComponent } from './client/login/client-login.component';
import { ClientDetailComponent } from './client/detail/client-detail.component';
import { AuthGuard } from './auth.guard';  // Ensure the path is correct!


const routes: Routes = [ 
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/register', component: AdminRegisterComponent },
  { path: 'client/create', component: ClientCreateComponent },
  { path: 'client/login', component: ClientLoginComponent },
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'clientdetail', component: ClientDetailComponent,
    canActivate: [AuthGuard]  // Assuming AuthGuard is the name of your guard.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
