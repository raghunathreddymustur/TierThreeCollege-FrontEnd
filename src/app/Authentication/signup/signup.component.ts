import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup 

  constructor() { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup(
      {
        'fullName':new FormControl("Enter Your Name"),
        'email':new FormControl(),
        'password':new FormControl(),
        'graduationYear':new FormControl(),
        'nameOfCollege':new FormControl()
      }
    )
  }
  signUpFormData()
  {
     console.log(this.signUpForm.value);
  }
}
