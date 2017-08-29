import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Router} from '@angular/router';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';


import {AuthService} from '../../AuthProviders/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  
  public login:User;
  public isLogged:boolean;
  public formdata;
  public isWrong:boolean;
  public ErrorMessage:string;

  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 100,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: false
};

  constructor(private auth:AuthService, private route:Router,private toastyService:ToastyService, private toastyConfig: ToastyConfig) { 
    this.toastyConfig.theme = 'material';
    if(this.auth.checkLogged()){
      this.route.navigate(['/about']);
    }
    this.isWrong=false;
  }

  

  ngOnInit() {
      this.formdata=new FormGroup({
        username: new FormControl("",Validators.required),
        password:new FormControl("",Validators.required)
      })
  }

  loginSystem(data,valid){
      if(valid){
          this.auth.login(data).subscribe(response=>{
            this.toastyService.success({
              title: "Login Successful",
              msg: "You are welcome",
              showClose: true,
              timeout: 2000,
              theme: "default"
          });
            location.reload();
          },error=>{
            this.isWrong=true;
            this.ErrorMessage=error.json().error_description;
            this.toastyService.error({
              title: "Login Failed!",
              msg: error.json().error_description,
              showClose: true,
              timeout: 5000,
              theme: "default"
          });
        })
      }
  }

  logout(){
    this.isLogged=this.auth.logout();
    location.reload();
  }

}

export class User {
  username: string;
  password:string;
}

interface Login{
  username:string,
  password:string
}