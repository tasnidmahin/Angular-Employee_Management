import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.usersDataService.getEmployeeCount().subscribe(response => {
      console.log(response);
    });
  }
}
