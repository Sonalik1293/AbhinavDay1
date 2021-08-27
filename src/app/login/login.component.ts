import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any=FormGroup
  constructor(private route:Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['',[ Validators.required]]
  })
  }

  get getControl() { return this.loginForm.controls; }
  onFormSubmit(){  
    if(this.loginForm.valid){
      localStorage.setItem ("username",this.getControl.username.value)
      localStorage.setItem ("password",this.getControl.password.value)
      this.route.navigate(['dashboard'])
    }

  }


}
