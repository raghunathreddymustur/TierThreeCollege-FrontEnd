import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.signInForm=new FormGroup(
      {
        'username':new FormControl(),
        'password':new FormControl()
      }
    )
  }
  signInData()
  {
    console.log(this.signInForm.value)
  }
}
