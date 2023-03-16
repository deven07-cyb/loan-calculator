import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(private http:HttpClient) { }
  usersignup(data:any){
    return this.http.post("http://localhost:3000/userlogin",data)
  }
}
