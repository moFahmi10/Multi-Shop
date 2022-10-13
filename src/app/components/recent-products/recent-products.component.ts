import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {
  products: Array<Product> = [] 
  constructor(private ProductService: ProductService) {
    this.products = this.ProductService.getRecentProducts();
   }

  ngOnInit(): void {
  }

}
