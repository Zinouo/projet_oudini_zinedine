import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe({
      next: (client) => {
        localStorage.setItem('nom', client.nom);
        localStorage.setItem('prenom', client.prenom);
  
        localStorage.setItem('isLoggedIn', 'true');
  
        this.router.navigate(['/catalogue']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
  
}
