import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any="FormGroup"

  Roles:any=['Admin', 'Author', 'Reader']

  constructor(private route:Router,
               private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      email:['', [Validators.required,Validators.email]],
      password: ['',[ Validators.required]],
      role:['',[ Validators.required]],
     
    })
  }

  get getControl() { 
    return this.registerForm.controls;
   }

   onFormSubmit(){  
     console.log(this.registerForm.value);

     this.route.navigate(['dashboard'])
   }

}
