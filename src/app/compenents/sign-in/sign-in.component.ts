import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  constructor( private router:Router){}
  ngOnInit(): void {}
  
  SignInForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
     pwd: new FormControl("",[Validators.required]),
  });
  
  signInSubmitted(){ 
      console.log(this.SignInForm.value);
      this.router.navigate(['dashboard'])
  }

  signInSignUp(){ 
    console.log(this.SignInForm.value);
    this.router.navigate(['signup'])
}

  get Email() :FormControl{
    return this.SignInForm.get("email") as FormControl;
  }
  get Pwd() :FormControl{
    return this.SignInForm.get("pwd") as FormControl;
  }
}

