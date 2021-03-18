import { Injectable } from '@angular/core';
//import { HttpModule, Http, Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
//import { HttpModule, Http, Response } from '@angular/http';
//import {UserService} from 'src/app/services/user.service';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8083/user/add';
const baseUrlgetAll = 'http://localhost:8083/user/all';
const baseUrlgetAllbydob = 'http://localhost:8083/user/orderbydob';
const baseUrlgetAllbydoj = 'http://localhost:8083/user/orderbydoj';
const baseUrldelete = 'http://localhost:8083/user/udelete';
const baseUrlupdate = 'http://localhost:8083/user/userupdate';
const baseUrlgetnew = 'http://localhost:8083/user';
const baseUrlgetbyname = 'http://localhost:8083/user/firstname';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  [x: number]: any;
 // id!: number;

  constructor(private http : HttpClient) { }
 // data: Observable<Any>


  create(data: { firstName: string; lastName: string; address: string; pincode: string; dob: string; joindate: string; }) {
    return this.http.post(baseUrl, data);
  }
  
  getAll() {
    return this.http.get(baseUrlgetAll);
  }
  
  getAllbydob(){
    return this.http.get(baseUrlgetAllbydob);
  }
  getAllbydoj(){
    return this.http.get(baseUrlgetAllbydoj);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${baseUrlgetnew}/${id}`);
  }

  getEmployeeByname(name: String): Observable<any> {
    return this.http.get(`${baseUrlgetbyname}/${name}`);
  }

  
  
  delete(id: any) {
    return this.http.delete(`${baseUrldelete}/${id}`);
  }
  update(id: any, data: any) {
    return this.http.put(`${baseUrlupdate}/${id}`, data);
  }
}
