import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import {HttpService} from './http.service';
import { CanActivate,Router } from '@angular/router';


@Injectable()
export class AuthService {

  private logindata:loginData;
  private serverPath='http://serverside.apphb.com';

  constructor(private http:Http) { }

  login(data:any){
    this.logindata={
      username:data.userName,
      password:data.passWord,
      grant_type:'password'
    }
    let body = 'username=' + data.username + '&password=' + data.password + '&grant_type=password';

   return this.http.post(this.serverPath+'/token',body,{headers:this.contentHeaders()}).map((res)=>{
    var data=res.json();
    localStorage.setItem('accessToken',data.access_token);
    return true;
   });

  }

   logout(){
     localStorage.removeItem('accessToken');
     return true;
   }

  registration(data:any,http:Http){
      return http.post(this.serverPath +'/api/account/registration',data);
  }

  contentHeaders() {
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    return header;
  }

  checkLogged(){
    return !!localStorage.getItem('accessToken');
  }

}

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService: AuthService, private router: Router) { }
 
    canActivate() {
        if (!this.authService.checkLogged()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}


interface loginData{
  username:string,
  password:string,
  grant_type:string
}