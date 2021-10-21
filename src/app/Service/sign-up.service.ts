import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface User
{
  email:string,
  password:string,
  fullName:string,
  collegeName:string,
  yearOfPassout:string
}
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  registerUser(body:any)
  {
    return this.http.post("http://localhost:8080/signup",body);
  }
}
