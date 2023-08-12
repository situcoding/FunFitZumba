import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  // Importing NgForm

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})

export class ClientCreateComponent implements OnInit {

  clientData = {
    first_name:'',
    last_name:'',
    street_address:'',
    city:'',
    state_province:'',
    postal_code:'',
    country:'',
    email:'',
    phone:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log('Form Data:', this.clientData);
      // Here, you would typically send this data to your server to save in the database.
      // For example, using a service.
    }
  }

}
