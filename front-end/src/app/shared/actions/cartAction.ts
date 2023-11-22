import { Product } from '../models/Product';

export class addCart {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {}
}

export class delCart {
  static readonly type = '[Product] Del';

  constructor(public payload: Product) {}
}
