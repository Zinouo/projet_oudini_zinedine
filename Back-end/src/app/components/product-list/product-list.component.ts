// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

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
}
