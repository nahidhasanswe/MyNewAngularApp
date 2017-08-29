import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-services.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInformation:userInfo;
  Posts:Posts[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllPosts().subscribe((posts)=>{
        this.Posts=posts;
    })
  }

}

interface userInfo{
  name:string,
  phone:string,
  age:number,
  isMarry:boolean
}

interface Posts{
  id:number,
  userId: number,
  title:string,
  body:string
}
