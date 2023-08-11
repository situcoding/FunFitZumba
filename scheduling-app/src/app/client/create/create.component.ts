import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  clientData = {
    name: '',
    email: ''
  };

  onSubmit(clientForm: NgForm) {
    if (clientForm.valid) {
      console.log('Client Data:', this.clientData);
      // Here you can process the client data, e.g., sending it to a backend API.
    }
  }
}
