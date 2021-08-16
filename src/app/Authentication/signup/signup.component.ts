import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup 
  isFormValid!:boolean
  
  constructor() { }

  ngOnInit(): void {
    this.isFormValid=true;
    this.signUpForm=new FormGroup(
      {
        'fullName':new FormControl("",[Validators.required,Validators.minLength(5)]),
        'email':new FormControl("",[Validators.required,Validators.email]),
        'password':new FormControl("",[Validators.required,Validators.minLength(8)]),
        'graduationYear':new FormControl("",[Validators.required,Validators.minLength(4)]),
        'nameOfCollege':new FormControl("",[Validators.required,Validators.minLength(5)])
      }
    )
  }
  signUpFormData()
  {
     this.isFormValid=this.signUpForm.valid;
  }

}
