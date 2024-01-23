// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Produit } from './models/produit';

interface CartItem {
  product: Produit;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(product: Produit) {
    const existingItem = this.items.find(item => item.product.ref === product.ref);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getTotalItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  removeFromCart(productRef: string) {
    const existingItemIndex = this.items.findIndex(item => item.product.ref === productRef);
    if (existingItemIndex > -1) {
      this.items[existingItemIndex].quantity--;

      if (this.items[existingItemIndex].quantity === 0) {
        this.items.splice(existingItemIndex, 1);
      }
    }
  }
}
