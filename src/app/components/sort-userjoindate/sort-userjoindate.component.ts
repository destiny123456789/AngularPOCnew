import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-sort-userjoindate',
  templateUrl: './sort-userjoindate.component.html',
  styleUrls: ['./sort-userjoindate.component.css']
})
export class SortUserjoindateComponent implements OnInit {

  constructor(private userservice : UserService) { }

 


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
  message: string | undefined;
  

  ngOnInit(): void {
    this.retrieveUsersbydoj();
  }

  retrieveUsersbydoj(){

    this.userservice.getAllbydoj()
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
