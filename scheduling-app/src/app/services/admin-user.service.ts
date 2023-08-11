import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private apiURL = 'http://localhost:3000/admin-users';  // adjust the port if your backend runs on a different port

  constructor(private http: HttpClient) { }

  // Registration method (existing)
  registerAdminUser(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, data);
  }

  // Login method
  loginAdminUser(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, data);
  }

  // Fetch a single admin user (Optional: In case you need it in the future)
  getAdminUser(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  // Update admin user (Optional: In case you need it in the future)
  updateAdminUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }

  // Delete admin user (Optional: In case you need it in the future)
  deleteAdminUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
