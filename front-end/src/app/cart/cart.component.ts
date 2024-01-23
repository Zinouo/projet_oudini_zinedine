import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Produit } from '../models/produit';
import { Router } from '@angular/router';

export interface CartItem {
  product: Produit;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items: CartItem[] = [];
  orderPlaced: boolean = false;

  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.items = this.cartService.getItems();
  }

  calculateTotal(): number {
    return this.items.reduce((acc, item) => acc + (item.product.prix * item.quantity), 0);
  }

  pay() {
    this.cartService.clearCart();
    this.orderPlaced = true;
  }

  removeItem(productRef: string) {
    this.cartService.removeFromCart(productRef);
    this.loadCartItems();
  }

  goBack() {
    this.router.navigate(['/catalogue']);
  }

}