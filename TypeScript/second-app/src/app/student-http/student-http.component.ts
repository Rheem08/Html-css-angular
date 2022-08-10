import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../Student';
import {Booky} from '../Booky';

@Component({
  selector: 'app-student-http',
  templateUrl: './student-http.component.html',
  styleUrls: ['./student-http.component.css']
})
export class StudentHttpComponent implements OnInit {
student:Student | any;
booky: Booky | any;
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
   // this._studentService.getStudents().subscribe(data=>{this.student=data}) //this helps fetch data
   this._studentService.getBooky().subscribe(data=>{this.booky=data}) //this helps fetch data
  }

}
