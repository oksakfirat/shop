import { AlertifyService } from './../services/alertify.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService, private alertfySercice:AlertifyService){}
  ngOnInit() {
    this.categoryService.getCategory().subscribe(data=>{this.categories=data});
  }
  title="Kategori listesi";


  categories: Category[]=[];

}
