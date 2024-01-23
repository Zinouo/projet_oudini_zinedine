import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Produit } from './models/produit';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  login: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Produit>>;
  searchTerm: string = '';

  constructor(private apiService: ApiService) {
    this.produits$ = this.apiService.getCatalogue();
  }


  search() {
    this.produits$ = this.apiService.getCatalogue(this.searchTerm);
  }
}
