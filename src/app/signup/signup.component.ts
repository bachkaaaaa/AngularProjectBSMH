import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUsername: string = '';
  newPassword: string='';
  confirmPassword: string = '';
  newEmail: string= '';
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('SignupComponent initialized');

  }

  validatePasswordStrength(password: string): void {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    this.isWeak = password.length < 6;
    this.isMedium = password.length >= 6 && password.length < 10;
    this.isStrong = password.length >= 10;
    console.log('SignupComponent initialized');

  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
    console.log('Validating email...');

  }
  
  signUp() {
    console.log('Sign-up button clicked');
    if (!this.validateEmail(this.newEmail)) {
      alert('Invalid email format');
      console.log('Sign-up button clicked');

      return;
    } 
    if (this.newPassword !== this.confirmPassword) {
      console.log('Passwords do not match');

      alert('Password do not match');
      return;
    }
 
    this.validatePasswordStrength(this.newPassword);
    console.log('Passwords do not match');

    if (this.isWeak) {
      alert('Password is too weak. Choose a stronger password.');
      return;
    }

    alert('Sign-up successful! Please log in.');
    console.log('Navigating to login page');

    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
