import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
user:any;
  constructor(private http:HttpClient) { }

  getUsersFromService(){
    return this.http.get('http://localhost:8080/Users/all')
  }
}
