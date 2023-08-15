import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './app-routing.module'; // Update this import

import { AppComponent } from './app.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';

@NgModule({
  declarations: [
    AppComponent,
       // ...other components
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule, // Include AppRoutingModule here
    // ...other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
