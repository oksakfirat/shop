import { NgForm } from '@angular/forms';

import { AccountService } from './../services/account.service';
import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User=new User();

  constructor(private accountService:AccountService){}

  login(form:NgForm){
    this.accountService.login(this.user);
    console.log(this.user.userName);
    console.log(this.user.password);
    
  }


}
