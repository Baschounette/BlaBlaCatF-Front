import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Audrey";
  password = "1234";
  message = false;
  isAuthenticated = false;

  //Service à créer
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



}
