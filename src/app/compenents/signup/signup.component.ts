import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  repeatPass: string='none';
  constructor( private router:Router){}
  ngOnInit(): void {this.SignupForm.valueChanges.subscribe((data)=>{console.log(this.SignupForm)})}

  SignupForm = new FormGroup({
    firstname: new FormControl("", [Validators.required,Validators.minLength(2)]),
    lastname: new FormControl("" ,[Validators.required,Validators.minLength(2)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.minLength(10)]),
    gender: new FormControl("",[Validators.required]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
    rpwd: new FormControl(""),
  });

  signupSubmitted(){
    if(this.Pwd.value === this.Rpwd.value){
      console.log(this.SignupForm.valid);
      this.repeatPass="none";
      this.router.navigate(['dashboard'])
      
    }
    else{
      this.repeatPass='inline';
    }
  }


  get FirstName() :FormControl{
    return this.SignupForm.get("firstname") as FormControl;
  }
  get LastName() :FormControl{
    return this.SignupForm.get("lastname") as FormControl;
  }
  get Email() :FormControl{
    return this.SignupForm.get("email") as FormControl;
  }
  get Mobile() :FormControl{
    return this.SignupForm.get("mobile") as FormControl;
  }
  get Gender() :FormControl{
    return this.SignupForm.get("gender") as FormControl;
  }
  get Pwd() :FormControl{
    return this.SignupForm.get("pwd") as FormControl;
  }
  get Rpwd() :FormControl{
    return this.SignupForm.get("rpwd") as FormControl;
  }
}
