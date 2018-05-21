import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SlimService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get('localhost:8080/usuario').subscribe(data => {
      console.log(data);
    })
                 
  }

}
