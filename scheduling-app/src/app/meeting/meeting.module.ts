import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ScheduleComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MeetingModule { }
