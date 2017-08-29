import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from '../AuthProviders/http.service'

@Injectable()
export class DataService {

  private serverPath='http://serverside.apphb.com';

  constructor(public http:Http, private myHttp:HttpService) { }

  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').
    map(result => result.json());
  }

  getAllPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos').
    map(result => result.json());
  }

  getEmployeeList(){
    return this.myHttp.get(this.serverPath + '/api/Activities/GetEmployeeList').
    map(result=>result.json());
  }
}
