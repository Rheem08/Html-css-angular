import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from './Student';
import {Observable} from 'rxjs';
import {Booky} from './Booky';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
//identify url, or baseurl
// baseurl='http://localhost:3000/students';
baseurl='http://localhost:8080/booky';
//modify base url to use Spring Rest end points

  constructor(private http:HttpClient) { }
  
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // getStudents():Observable<Student>{
  //   return this.http.get<Student>(this.baseurl);
  // }
  getBooky():Observable<Booky>{
    return this.http.get<Booky>(this.baseurl);
  }
}
