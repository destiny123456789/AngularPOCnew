import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SortUserComponent } from './components/sort-user/sort-user.component';
import { SortUserjoindateComponent } from './components/sort-userjoindate/sort-userjoindate.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchpipePipe } from './searchpipe.pipe';
//import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



const routes: Routes = [
 { path: 'add', component: AddUserComponent },
 {path: 'users', component: UserListComponent},
 { path: 'tutorials/:id', component: UpdateEmployeeComponent },
 { path: 'Search', component: SearchUserComponent },
 { path: 'sort', component: SortUserComponent },
 { path: 'Sortbyjoindate', component: SortUserjoindateComponent },
 
 
];

@NgModule({
  
  
  exports: [RouterModule],
  
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UpdateEmployeeComponent,
    SearchUserComponent,
    SortUserComponent,
    SortUserjoindateComponent,
    SearchpipePipe,
   // UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
   // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
