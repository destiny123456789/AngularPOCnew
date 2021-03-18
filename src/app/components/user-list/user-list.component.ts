import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {  Input  } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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


deleteEmployee(id: number) {
  this.userservice.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.retrieveUsers();
       // this.reloadData();
      },
      error => console.log(error));
      
}
updateTutorial(id: number) {
  this.userservice.update(this.users.id, this.users)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}


}
