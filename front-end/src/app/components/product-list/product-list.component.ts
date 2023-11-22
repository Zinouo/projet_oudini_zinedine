// src/app/components/product-list/product-.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/models/Product';
import { Store } from '@ngxs/store';
import { addCart } from '../../shared/actions/cartAction';
import { cartState } from '../../shared/states/cartState';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private store: Store) {}
  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  searchTerm: string = '';

onSearch(term: string): void {
  this.searchTerm = term;
  this.filterProducts();
}

filterProducts(): void {
  this.productService.getProducts().subscribe((data: any[]) => {
    this.products = data.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  });
}

addCart(product: any) {
  const ProductToAdd = new Product(
    product.id, 
    product.name, 
    product.description, 
    product.price, 
    product.category, 
    1 // Default quantity set to 1
  );

  this.store.dispatch(new addCart(ProductToAdd));
}


}
