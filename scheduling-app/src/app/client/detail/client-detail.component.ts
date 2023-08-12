import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';  // Corrected the import path here

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  client?: Client;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    const clientId = 1;  // replace with actual logic to get client ID
    this.clientService.getClientDetail(clientId).subscribe(data => {
      this.client = data;
    });
  }
}
