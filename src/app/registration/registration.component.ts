// registration.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service.service'; // Adjust the import path as necessary
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  model: any = {}; // Object to store form data
  registrationSuccessful: boolean = false; // Flag to track registration success

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Submitting registration data:', this.model); // Check if model object contains the correct data
    // Save registration data to local storage
    localStorage.setItem('registrationData', JSON.stringify(this.model));
  
    this.router.navigate(['/login']);
  
    // Simulate registration success
    this.registrationSuccessful = true;
    setTimeout(() => {
      this.registrationSuccessful = false; // Hide success message after 3 seconds
    }, 3000);
  }
}
