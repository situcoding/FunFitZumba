import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ManageScheduleComponent } from './admin/manage-schedule/manage-schedule.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarMonthModule } from 'angular-calendar';
import { AvailabilityService } from './services/availability.service';
import { MeetingService } from './services/meeting.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/schedule', pathMatch: 'full' },
  { path: 'schedule', component: ManageScheduleComponent }
  // ... add more route definitions as needed
];

@NgModule({
  declarations: [
    AppComponent,
    ManageScheduleComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CalendarMonthModule,
    // Other modules
  ],
  providers: [
    AvailabilityService,
    MeetingService,
    // Other services and providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
