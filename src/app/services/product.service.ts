import { Category } from './../category/category';
import { Product } from './../product/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor( private http: HttpClient) { }

  path = "http://localhost:3000/products";

  getProducts({ categoryId }: { categoryId:Category }):Observable<Product[]>{
    
    let newPath=this.path;
    if(categoryId){
      newPath=newPath+ "?categoryId="+categoryId;
    }
   return this.http.get<Product[]>(newPath).pipe(
    tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handelError)
   );
    
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Autohorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handelError)
     );

  }

  handelError(err: HttpErrorResponse){
    let errorMesage=""
    if (err.error instanceof ErrorEvent) {
      errorMesage="Bir hata oluştu"+ err.error.message;
    }else{
      errorMesage="Sistemsel bir hata oluştu"
    }
    return throwError(errorMesage);
  }
}
