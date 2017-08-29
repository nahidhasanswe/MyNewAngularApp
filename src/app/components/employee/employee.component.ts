import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-services.service';
import {PaginationInstance} from 'ngx-pagination';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public EmployeeList:Employee[];
  public JSON:JSON;
  public currentPage:number;
  public searchName:string;
  public searchSection:string;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
};

  constructor(private service:DataService) {
   }

  ngOnInit() {
    this.service.getEmployeeList().subscribe((result)=>{
      this.EmployeeList=result;
  })
  }

}

export class Employee{
  EmployeeId:string;
  EmployeeName:string;
  Email:string;
  DesignationId:string;
  Designation:string;
  SectionId:string;
  Section:string;
  DepartmentId:string;
  Department:string;
  ReportToId:string;
  ReportToName:string;
  JoiningDate:Date;
  Location:string;
  GroupId:string;
  GroupName:string;
}
