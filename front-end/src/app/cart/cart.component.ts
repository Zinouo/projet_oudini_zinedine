import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from '../shared/models/Product';
import { delCart } from '../shared/actions/cartAction';
import { cartState } from '../shared/states/cartState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class cartComponent implements OnInit{
  constructor(private store: Store) {}

  isCartVisible = false;

  @Select(cartState.getListProducts) list$!: Observable<Product[]>;
  ngOnInit() {}

  delCart(p: Product): void {
    this.store.dispatch(new delCart(p));
  }

  toggleCartVisibility() {
    this.isCartVisible = !this.isCartVisible;
  }
}
