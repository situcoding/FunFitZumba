import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for form handling

import { AppComponent } from './app.component';
import { ManageScheduleComponent } from './admin/manage-schedule/manage-schedule.component'; // Replace with your actual component path
import { AvailabilityService } from './services/availability.service';
import { MeetingService } from './services/meeting.service'; // Import MeetingService

@NgModule({
  declarations: [
    AppComponent,
    ManageScheduleComponent, // Declare your component here
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to imports
    // Other modules
  ],
  providers: [
    AvailabilityService,
    MeetingService, // Add MeetingService to providers
    // Other services and providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
