import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupFormViewChild: NgForm;
  submitted: boolean = false;


  constructor() { 
    
  }
  
  onSubmit(form: HTMLFormElement){
    console.log( this.signupFormViewChild );
    if (this.signupFormViewChild.valid) {
      this.submitted = true; 
    }
  }

  submitSignup(){

  }
  ngOnInit(): void {
 }
}

