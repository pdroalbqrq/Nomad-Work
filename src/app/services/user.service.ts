import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  get1UserData(name: String) {
    return this.http.get('http://localhost:8080/user/' + name).subscribe((data: any[]) => {
      console.log(data)
      function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      console.log(isEmpty(data))
    })
  }
  getallUserData() {
    return this.http.get('http://localhost:8080/user').subscribe((data: any[]) => { console.log(data) })
  }
  postUser(ac: String) {
    return this.http.post('http://localhost:8080/user', ac).subscribe((data: any) => { console.log(data) })
  }
}
