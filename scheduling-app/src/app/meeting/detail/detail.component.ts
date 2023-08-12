import { Component, OnInit } from '@angular/core';

interface MeetingDetail {
  date: Date;
  time: Date;
  location: string;
  host: string;
  subject: string;
  attendeeCount: number;
}

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  // For demonstration purposes, we'll populate a sample meeting detail.
  // In a real-world scenario, you'd likely fetch this from a service.
  meetingDetail: MeetingDetail = {
    date: new Date(),
    time: new Date('2023-08-11T14:30:00'),
    location: 'Conference Room A',
    host: 'John Doe',
    subject: 'Quarterly Review',
    attendeeCount: 15
  };

  constructor() { }

  ngOnInit(): void {
    // In a real-world application, this is where you'd make a service call
    // to fetch the meeting details based on some ID or other parameter.
  }
}
