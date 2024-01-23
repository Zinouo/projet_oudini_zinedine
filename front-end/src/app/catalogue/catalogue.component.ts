import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  produits$: Observable<Array<Produit>>;
  searchTerm: string = '';
  cnx: boolean = false;

  constructor(private apiService: ApiService, private cartService: CartService) {
    this.produits$ = this.apiService.getCatalogue(); 
  }

  ngOnInit() {
    this.loadCatalogue();
  }

  loadCatalogue() {
    this.produits$ = this.apiService.getCatalogue(this.searchTerm);
  }

  search() {
    this.loadCatalogue();
  }

  addToCart(product: Produit) {
    this.cartService.addToCart(product);
  }

  getTotalItemCount(): number {
    return this.cartService.getTotalItemCount();
  }
}
