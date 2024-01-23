import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    nom: '',
    prenom: '',
    adresse: '',
    codepostal: '',
    ville: '',
    email: '',
    sexe: '',
    login: '',
    password: '',
    telephone: ''
  };
  

  constructor(private apiService: ApiService, private router: Router) {}

  register() {
    this.apiService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('User registered:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }
}
