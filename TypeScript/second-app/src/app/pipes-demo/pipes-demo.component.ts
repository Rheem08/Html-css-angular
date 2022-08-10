import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
course:string='Angular';
lastLoggedDate= new Date(2020, 0, 18);
  constructor() { }

  ngOnInit(): void {
  }

}
