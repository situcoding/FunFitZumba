import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/model/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = this.productsService.getProducts();

  showProducts = true;

  categories = [
    { title: "Select Category", total: 1000 },
    { title: "Home & Kitchen", total: 30 },
    { title: "Furniture", total: 300 },
    { title: "Clothing", total: 12300 }
  ];

  productForm = new FormGroup(
    {
      pid: new FormControl(0),
      name: new FormControl(''),
      price: new FormControl(0),
      ratings: new FormControl(0.0),
      category: new FormControl(this.categories[0])
    }
  )

  constructor(private productsService: ProductsService){
  }

  addProductToDB():void{

     // Call method that sends the new product to the Back End.
     this.products.push(new Product(this.productForm.value.pid,
                                    this.productForm.value.name, 
                                    this.productForm.value.price, 
                                    this.productForm.value.ratings));
  }
}
