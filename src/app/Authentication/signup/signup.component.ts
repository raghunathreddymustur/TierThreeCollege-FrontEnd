import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/Service/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup 
  isFormValid!:boolean
  
  constructor(private signUpService:SignUpService) { }

  ngOnInit(): void {
    this.isFormValid=true;
    this.signUpForm=new FormGroup(
      {
        'fullName':new FormControl("",[Validators.required,Validators.minLength(5)]),
        'email':new FormControl("",[Validators.required,Validators.email]),
        'password':new FormControl("",[Validators.required,Validators.minLength(8)]),
        'yearOfPassOut':new FormControl("",[Validators.required,Validators.minLength(4)]),
        'collegeName':new FormControl("",[Validators.required,Validators.minLength(5)])
      }
    )
  }
  signUpFormData(formValues:FormGroup)
  {
     const postBody={
       email:formValues.value.email,
       password:formValues.value.password,
       fullName:formValues.value.fullName,
       yearOfPassOut:formValues.value.yearOfPassOut,
       collegeName:formValues.value.collegeName
     }
     this.signUpService.registerUser(postBody).subscribe(data=>{
       console.log(data);
     },error=>{console.log(error)});

  }

}
