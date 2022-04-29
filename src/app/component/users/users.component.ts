import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
    this.getUsersFromUsers();
  }

  getUsersFromUsers(){
    this.userService.getUsersFromService().subscribe(data =>{
      this.users = data;
    })
  }

}
