import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  employeeCount: number  = 0;
  employeeList: Employee[] = [];

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.usersDataService.getEmployeeList().subscribe(response => {
      this.employeeList = response.content;
    })

    this.usersDataService.getEmployeeCount().subscribe(response => {
      this.employeeCount = response.count;
    });
  }

  editProfile(employee: Employee) {

  }

  deleteProfile(employee: Employee) {

  }

  openNew() {
    
  }
}
