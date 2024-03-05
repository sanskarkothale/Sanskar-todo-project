import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Retrieve registration data from local storage
    const registrationData = localStorage.getItem('registrationData');
    if (registrationData) {
      const userData = JSON.parse(registrationData);
      if (this.username === userData.username && this.password === userData.password) {
        // Navigate to task route if login successful
        this.router.navigate(['/task']);
      } else {
        // Display error message if login credentials do not match
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      // Display error message if no registration data found
      this.errorMessage = 'No registration data found';
    }
  }
}
