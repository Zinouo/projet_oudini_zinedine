export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number; // Added for cart quantity management

  constructor(id: number, name: string, description: string, price: number, category: string, quantity: number = 1) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
}
