import { Injectable } from '@angular/core';
import { Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] =[
    new Product(101,"Adidas Alphabounce Shoe", 3000, 4.5),
    new Product(201,"Samsung Led TV", 30000, 5),
    new Product(301,"Cadbury 5 Star", 20, 4.5),
    new Product(401,"Apple iPhone 11", 53000, 4.8),
    new Product(501,"Samsung Fold", 73000, 4.3),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
