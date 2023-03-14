import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { Category } from './../../category/category';
import { CategoryService } from './../../services/category.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertiyfService:AlertifyService
    ){}
    
    model:Product=new Product();
  categories:Category[]=[];
  ngOnInit() {
    this.categoryService.getCategory().subscribe(data=>{
      this.categories=data
    });
  }
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertiyfService.success(data.name+"Ürün başarılı bir şekilde eklendi")
    });
  }

}
