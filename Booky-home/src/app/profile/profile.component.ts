import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { books } from '../book-library';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 // name:string = "BlackPanda";
 id:number = 5;
 name:string = 'chickeHead';
 
  profile: Profile = { //creating an instance of the profile interface, with hardcoded values
    id: 5,
    name: 'HellSpawn'
  }; //all additional files should be created within the MAIN src/app folder to provide global access
  //dual data binding
  bookBees = books;  //holds an array of profiles, techincally books

  // new profile
  constructor() { }
  
  ngOnInit(): void {
  }

}
