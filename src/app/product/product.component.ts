import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from './product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AlertifyService,ProductService]//servisleri local yapar
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService, 
    private ProductService:ProductService,
    private activateRoute:ActivatedRoute
    ) { }
  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{ //catgirye link verip catgori id ile üürünleri getirmek için kullanılır.
      this.ProductService.getProducts({ categoryId: params["categoryId"] }).subscribe(data=>{this.products=data});
    })
    
    
  }
  addToCard(product: Product) {
    this.alertifyService.success("added" + " " + product.name)
  }
  title = "Ürünler listesi "
  filterText = ""
  products: Product[] = [];
  path = "http://localhost:3000/products";


}
