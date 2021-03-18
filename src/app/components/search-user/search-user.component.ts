import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {UserService} from 'src/app/services/user.service';
//import {SearchpipePipe} from 'src/app/searchpipe.pipe.ts';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: any;
  currentUser = {
    id:'',
    firstName: '',
    lastname: '',
    address: '',
    pincode:'',
    dob:'',
    joindate:''
  };
  currentIndex = -1;
  title = '';
  searchname : string ="";

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(){

    this.userservice.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
          
        },
        error => {
          console.log(error);
        });
}
  
}

  
  

