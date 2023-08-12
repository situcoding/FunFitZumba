import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getClientDetail(clientId: number): Observable<Client> {
    // Replace with your actual API endpoint
    return this.http.get<Client>(`/api/clients/${clientId}`);
  }
}
