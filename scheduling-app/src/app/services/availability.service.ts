import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private baseUrl: string = 'http://localhost:3000/api/availabilities';

  constructor(private http: HttpClient) { }

  // Get all availabilities
  getAvailabilities(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Add a new availability
  addAvailability(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Update an existing availability by ID
  updateAvailability(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Delete an availability by its ID
  deleteAvailability(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
