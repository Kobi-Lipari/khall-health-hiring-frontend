import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Job } from '../job.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoggingInService } from '../logging-in.service';
import { UsersForLoggingInService } from '../users-for-logging-in.service';

@Component({
  selector: 'app-hospital-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './hospital-sign-up.component.html',
  styleUrl: './hospital-sign-up.component.css'
})




export class HospitalSignUpComponent implements OnInit {
  hospitalForm: FormGroup;
  successMessage: string = '';
  submitted = false;
  errorMessage: string = '';




  constructor(private fb: FormBuilder, private router: Router, private usersForLoggingIn: UsersForLoggingInService) {
    this.hospitalForm = this.fb.group({
      hospitalName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // role: ['hospital']
    });
  }

  ngOnInit(): void {
  }


  onSubmitHospital() {

    this.usersForLoggingIn.register(this.hospitalForm.value).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('Signup successful:', response);
        this.router.navigate(['/']);

        // Optionally, you can redirect the user to another page or show a success message
      },
      (error) => {
        // Handle signup error
        console.error('Signup error:', error);
        // Optionally, you can display an error message to the user
      }
    );

    }

    // this.submitted = true;
    // console.log('Form validity:', this.hospitalForm.valid); // Log the validity of the form
  
    // if (this.hospitalForm.valid) {
    //   // Proceed with form submission
    //   this.hospitalForm.patchValue({ role: 'hospital' });
  
    //   // Store user data in localStorage
    //   localStorage.setItem('currentUser', JSON.stringify(this.hospitalForm.value));
    //   this.successMessage = 'Sign up successful!';
  
    //   const { email, password } = this.hospitalForm.value;
    //   localStorage.setItem('signupEmail', email);
    //   localStorage.setItem('signupPassword', password);
    //   localStorage.setItem('role', 'hospital')
    // } else {
    //   console.log('Form is invalid. Please fill all required fields.'); // Log a message indicating form is invalid
    // }

    // onSubmit() {
    //   this.submitted = true;
  
    //   if (this.signUpForm.invalid) {
    //     return;
    //   }
  
    //   // Set role to 'nurse'
    //   this.signUpForm.patchValue({ role: 'nurse' });
  
    //   // Store user data in localStorage
    //   localStorage.setItem('currentUser', JSON.stringify(this.signUpForm.value));
    //   this.successMessage = 'Sign up successful!';
  
    //   const { email, password } = this.signUpForm.value;
    //   localStorage.setItem('signupEmail', email);
    //   localStorage.setItem('signupPassword', password);
  
  



  
  

    
    

      
}


// export class HospitalSignUpComponent implements OnInit {
//   hospitalForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.hospitalForm = this.fb.group({
//       hospitalName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   ngOnInit(): void {}

//   onSubmitHospital(): void {
//     if (this.hospitalForm.valid) {
//       // Implement your service call here
//       console.log("Hospital Data:", this.hospitalForm.value);
//       // Potentially navigate somewhere else after the form is successfully submitted
//       this.router.navigate(['/hospital-dashboard']);
//     } else {
//       alert('Please fill all required fields.');
//     }
//   }
// }