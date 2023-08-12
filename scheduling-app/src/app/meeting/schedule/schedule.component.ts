import { Component } from '@angular/core';
import { CalendarView, CalendarMonthViewDay, CalendarEvent } from 'angular-calendar';
import { isSameDay, isSameMonth, startOfDay, endOfDay } from 'date-fns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  // This is just a sample availability data structure, replace it with your actual data
  availability: { date: Date; available: boolean }[] = [
    { date: startOfDay(new Date()), available: true },
    { date: startOfDay(new Date()), available: false },
    // ... add more availability data
  ];

  dayClicked(day: CalendarMonthViewDay): void {
    if (isSameMonth(day.date, this.viewDate)) {
      this.viewDate = day.date;
    }
  }

  cellModifier(cell: CalendarMonthViewDay): void {
    cell.cssClass = this.isDayAvailable(cell.date) ? 'available' : 'unavailable';
  }

  isDayAvailable(date: Date): boolean {
    const availabilityEntry = this.availability.find((entry) => startOfDay(entry.date).getTime() === startOfDay(date).getTime());
    return availabilityEntry ? availabilityEntry.available : false;
  }
}
