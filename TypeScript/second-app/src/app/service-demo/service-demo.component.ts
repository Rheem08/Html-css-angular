import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
employee:any=[];
  constructor(private _employeeService:EmployeeService) {
  this.employee=  _employeeService.getEmployees();
   }

  ngOnInit(): void {
  }

}