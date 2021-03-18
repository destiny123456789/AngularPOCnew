import { Component, OnInit } from '@angular/core';

import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  User = {
    firstName: '',
    lastName: '',
    address: '',
    pincode:'',
    dob:'',
    joindate:''
  };
  submitted = false;
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    const data = {
      firstName: this.User.firstName,
      lastName : this.User.lastName,
      address : this.User.address,
      pincode:this.User.pincode,
      dob:this.User.dob,
      joindate:this.User.joindate
      
    };

    this.userservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.User = {
      firstName: '',
      lastName: '',
      address:'',
      pincode:'',
      dob:'',
      joindate:''

      //published: false;
    };
  }

}
