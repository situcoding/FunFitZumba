import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  {
    path: 'meetings',  // This can be an empty path '' if you want it to be the default route for a parent route.
    component: ListComponent
  },
  {
    path: 'meetings/:id',  // This assumes you want to access details with a route like '/meetings/1' where '1' is the ID of the meeting.
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: 'dateAdapter',
      useFactory: adapterFactory
    }),
    RouterModule.forChild(routes)
  ],
  exports: [
    // Export components if needed by other modules.
    // If no other module needs them, this can be removed or left empty.
  ]
})
export class MeetingModule { }
