import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private baseUrl: string = 'http://localhost:3000/api/meetings';

  constructor(private http: HttpClient) { }

  // Get all meetings
  getMeetings(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Add a new meeting
  addMeeting(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Update an existing meeting by ID
  updateMeeting(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Delete a meeting by its ID
  deleteMeeting(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
