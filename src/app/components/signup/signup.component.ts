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
      } else {
        this.passwordMatching(username, password, confrim);        
      }
    });

  };
  
  passwordMatching(username: any, password: any, confirm: any) {
    if (password !== confirm) {
      console.log("passwords don't match");
    } else {
      this.user.postNewUser(username, password).subscribe();
    }
  };
}