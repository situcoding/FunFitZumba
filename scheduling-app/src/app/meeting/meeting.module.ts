import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeetingModule { }
