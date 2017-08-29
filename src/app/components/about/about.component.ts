import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public info:Info[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllPhotos().subscribe((posts)=>{
      this.info=posts;
  })
  }

}

interface Info{
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:string
}
