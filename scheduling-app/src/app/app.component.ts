import { Component } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './admin/registration/registration.component.html'
})
export class AppComponent {

  constructor(private adminUserService: AdminUserService) { }

  onFormSubmit(data: any) {
    this.adminUserService.registerAdminUser(data).subscribe(response => {
      console.log('Registration successful', response);
    }, error => {
      console.log('Error', error);
    });
  }
}
