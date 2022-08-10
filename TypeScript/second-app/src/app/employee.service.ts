import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees():object{
    return[
      {"id":1, "name":"Tom", "age":17},
      {"id":100, "name":"Hank", "age":27},
      {"id":10, "name":"Han", "age":14},
      {"id":3, "name":"Bob", "age":19}
    ]
  }
}
