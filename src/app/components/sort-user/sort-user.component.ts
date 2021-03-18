import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-sort-user',
  templateUrl: './sort-user.component.html',
  styleUrls: ['./sort-user.component.css']
})
export class SortUserComponent implements OnInit {

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
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.retrieveUsersbydob();
  }

  retrieveUsersbydob(){

    this.userservice.getAllbydob()
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
