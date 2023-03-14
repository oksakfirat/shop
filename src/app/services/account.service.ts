import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
import { User } from '../login/User';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn=false;
  login(user:User):boolean{

    if(user.userName=="firat" && user.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;
     
    }
    else{
      return false;
    }
    

  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    this.loggedIn=false;
    localStorage.removeItem("isLogged");

  }
  
}
