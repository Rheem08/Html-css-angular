import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  employee:any=[];
  constructor(private empService:EmployeeService) { 
    this.employee=  empService.getEmployees();
  }

  ngOnInit(): void {
  }
     showMessage(){
      alert("Something is happening")
    }
}
