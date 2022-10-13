import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { OrderDetails } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-shope-detail',
  templateUrl: './shope-detail.component.html',
  styleUrls: ['./shope-detail.component.css']
})
export class ShopeDetailComponent implements OnInit {
  @Input() productId:number = 0;
  product:Product = {} as Product;
  quantity:number = 1;
  constructor(private productService:ProductService, private cartService:CartService , private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });
    this.product = productService.getProductById(this.productId);
    console.log(this.productId)
  }

  ngOnInit(): void {
  
    }
  
  incQuantity(){
    this.quantity++;
  }
  decQuantity(){
    if(this.quantity>1) this.quantity--;
  }
  addToCart(){
    for (let i = 0; i< this.quantity;i++)
      this.cartService.addToCart(this.product);
  }

}
