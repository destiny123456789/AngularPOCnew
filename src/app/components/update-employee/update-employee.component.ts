import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from 'src/app/services/user.service';
//import { AddUserComponent } from './add-user.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  //user: any;
  message: string | undefined;
  idget!: number;
  

  
  currentUser = {
    id:'',
    firstName: '',
    lastName: '',
    address: '',
    pincode:'',
    dob:'',
    joindate:''
  };

 

  constructor(private route: ActivatedRoute,private router: Router,
    private userservice: UserService) { }

  ngOnInit(): void {

    this.idget! = this.route.snapshot.params['id'];
    this.userservice.getEmployee(this.idget!)
    .subscribe(data => {
      console.log(data)
      this.currentUser = data;
    }, error => console.log(error));
    

  }
 
  updateTutorial() {
    
    this.userservice.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          alert("updated");


        },
        error => {
          console.log(error);
        });
  }

}
