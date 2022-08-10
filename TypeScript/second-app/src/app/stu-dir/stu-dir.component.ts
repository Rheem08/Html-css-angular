import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-dir',
  templateUrl: './stu-dir.component.html',
  styleUrls: ['./stu-dir.component.css']
})
export class StuDirComponent implements OnInit {
names:string[]; //an array of string values
  constructor() {
    this.names=['heen' , 'zoro', 'usopp'];
   }

  ngOnInit(): void {
  }

}
