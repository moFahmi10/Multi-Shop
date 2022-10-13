import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products :Array<Product> = [
    {
      id:1,
      name: "product 1",
      imageURL:"assets/img/product-1.jpg",
      price: 150,
      discount: 0.1,
      rating: 3.1,
  },
  {
    id:2,
    name: "product 2",
    imageURL:"assets/img/product-2.jpg",
    price: 100,
    discount: 0.1,
    rating: 4,
},
{
  id:3,
  name: "product 3",
  imageURL:"assets/img/product-3.jpg",
  price: 80,
  discount: 0.1,
  rating: 4.5,
},
{
  id:4,
  name: "product 4",
  imageURL:"assets/img/product-4.jpg",
  price: 200,
  discount: 0.1,
  rating: 2,
}
  ]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProductById(id:number):Product{

    let returnProduct: Product 

    for(let product of this.products){
      if (product.id == id)
      return product;
    }

    return    {
      id:0,
      name: "no-product",
      imageURL:"",
      price: 0,
      discount: 0,
      rating: 0,
  }
  }
  getRecentProducts():Array<Product>{
    let recentProducts: Array<Product> = [];
    let storedOrderStr = localStorage.getItem('Orders');
    if(storedOrderStr != null) {
      let storedOrder = JSON.parse(storedOrderStr)
      //returns only last 2 recent products
      let i = 2;
      for(let orderdetail of storedOrder.orders){
        recentProducts.push(orderdetail.product);
        i--;
        if(i==0) break;
      }
    };
    return recentProducts;
  }
}
