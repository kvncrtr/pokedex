import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') form: any;
  usernameErrorMessage = 'your username must be 4 characters long';

  constructor(
    private user: UserService,
    private elementRef: ElementRef
  ) {};

  ngOnInit(): void {};

  onSubmit(form: NgForm) {
    let formCopy = null;
    formCopy = {...form.value};
    this.usernameAvalibility(formCopy.username, formCopy.password, formCopy.confirm);
  };
  
  usernameAvalibility(username: any, password: any, confrim: any) {
    this.user.checkUsernameVacancy().subscribe((data)=> {
      const foundUsername = data.indexOf(username);
      
      if (foundUsername >= 0) {
        this.form.form.controls['username'].setErrors({'incorrect': true});
        this.usernameErrorMessage = `The username "${username}" is not avaliable`;
      } else if (foundUsername === -1) {
        this.passwordMatching(password, confrim, username);        
      }
    });

  };
  
  passwordMatching(password: any, confirm: any, username: any) {
    if (password === confirm) {
      console.log('match');
    } else {
      console.log("password don't match");
    }
    // check if the password matches the confirmed password

    // if true then switch username validator to true
  };
}
/*

how to change the span inner text to say "username is not avaliable" programatically 

<div class="signup--form-case">

         <div class="signup--textbox">
            <p class="signup--title">create an account.</p>            
            <h2 class="signup--give">Fill out your details</h2>
         </div>
         
         <form (ngSubmit)="onSubmit(signupForm)" #signupForm="ngForm">
            <div class="signup--form-group-username">
               <label for="signup--username">Username</label>
               <input 
                  type="text" 
                  name="username" 
                  id="signup--username" 
                  placeholder="Username"
                  minlength="4"
                  ngModel
                  required
                  username
                  #username="ngModel"
               />
               <span id="usernameError" class="signup--error" *ngIf="!username.valid && username.touched">your username must be 4 characters long</span>
            </div>

*/ 