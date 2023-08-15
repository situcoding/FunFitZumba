import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin/admin-list/admin-list.component';

const routes: Routes = [
  // ...other routes
  { path: 'admin', component: AdminListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
