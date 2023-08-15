import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  getAllAdminUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createAdminUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }
}
