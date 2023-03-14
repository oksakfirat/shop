import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ErrorHandler, Injectable, Pipe } from '@angular/core';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
path="http://localhost:3000/categories";

getCategory():Observable<Category[]>{
  return this.http.get<Category[]>(this.path).pipe(
   tap(data=>console.log(JSON.stringify(data))),
   catchError(this.handelError)
  );

}
  handelError(err:HttpErrorResponse) {
    let mesage="";
    if(err.error instanceof ErrorEvent){
    mesage="Bir hata oluştu"+err.error.message;
    }else {
      mesage="Sistemsel bir hata oluştu.";
    }
    return throwError(mesage);
  }
  

}
