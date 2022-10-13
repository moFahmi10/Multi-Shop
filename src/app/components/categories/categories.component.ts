import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [
    {id:1,
      name: "category1",
      imageUrl: "assets/img/cat-1.jpg",
      productsCount: 100,
    },

    {id:2,
      name: "category2",
      imageUrl: "assets/img/cat-2.jpg",
      productsCount: 80,
    },
    {id:3,
      name: "category3",
      imageUrl: "assets/img/cat-3.jpg",
      productsCount: 70,
    },
    {id:4,
      name: "category4",
      imageUrl: "assets/img/cat-4.jpg",
      productsCount: 60,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  
  }

}
