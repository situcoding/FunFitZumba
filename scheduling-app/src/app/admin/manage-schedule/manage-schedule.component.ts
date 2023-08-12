import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AvailabilityService } from '/Users/sjsitu/scheduling-app/src/app/services/availability.service'
import { MeetingService } from '/Users/sjsitu/scheduling-app/src/app/services/meeting.service'

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {
  availabilities: any[] = [];
  meetings: any[] = [];
  availabilityForm!: FormGroup;
  meetingForm!: FormGroup;

  
  constructor(
    private availabilityService: AvailabilityService,
    private meetingService: MeetingService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initAvailabilityForm();
    this.initMeetingForm();
    this.fetchAvailabilities();
    this.fetchMeetings();
  }

  initAvailabilityForm() {
    this.availabilityForm = this.formBuilder.group({
      date: [''],
      time: ['']
    });
  }

  initMeetingForm() {
    this.meetingForm = this.formBuilder.group({
      subject: [''],
      attendeeName: [''],
      date: [''],
      time: ['']
    });
  }

  fetchAvailabilities() {
    this.availabilityService.getAvailabilities().subscribe((data: any) => {

      this.availabilities = data;
    });
  }

  editAvailability(availability: any) {
    this.availabilityForm.setValue({
      date: availability.date,
      time: availability.time
    });
  }

  deleteAvailability(id: number) {
    this.availabilityService.deleteAvailability(id).subscribe(() => {
      this.fetchAvailabilities();  // Refresh list after deletion
    });
  }

  onAvailabilitySubmit() {
    if (this.availabilityForm.valid) {
      const formData = this.availabilityForm.value;
      this.availabilityService.addAvailability(formData).subscribe(() => {
        this.fetchAvailabilities();  // Refresh list after addition
      });
    }
  }

  fetchMeetings() {
    this.meetingService.getMeetings().subscribe(data => {
      this.meetings = data;
    });
  }

  editMeeting(meeting: any) {
    this.meetingForm.setValue({
      subject: meeting.subject,
      attendeeName: meeting.attendeeName,
      date: meeting.date,
      time: meeting.time
    });
  }

  deleteMeeting(id: number) {
    this.meetingService.deleteMeeting(id).subscribe(() => {
      this.fetchMeetings();  // Refresh list after deletion
    });
  }

  onMeetingSubmit() {
    if (this.meetingForm.valid) {
      const formData = this.meetingForm.value;
      this.meetingService.addMeeting(formData).subscribe(() => {
        this.fetchMeetings();  // Refresh list after addition
      });
    }
  }
}
