import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { addCart, delCart } from '../actions/cartAction';
import { cartStateModel } from './cartStateModel';
import { Product } from '../models/Product';

@State<cartStateModel>({
  name: 'Products',
  defaults: {
    Products: [],
  },
})

@Injectable()

export class cartState {
  @Selector()
  static getNbProducts(state: cartStateModel) {
    return state.Products??[].length;
  }

  @Selector()
  static getListProducts(state: cartStateModel) {
    return state.Products;
  }

  @Action(addCart)
  add(
    { getState, patchState }: StateContext<cartStateModel>,
    { payload }: addCart
  ) {
    const state = getState();
    patchState({
      Products: [...state.Products??[], payload],
    });
  }

  @Action(delCart)
  del({ getState, patchState }: StateContext<cartStateModel>, { payload }: delCart) {
    const state = getState();
  
    patchState({
      Products: state.Products?.filter((x: Product) => x.id !== payload.id) || [],
    });
  }
  
}
