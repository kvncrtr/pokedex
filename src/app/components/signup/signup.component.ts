import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') form: any;
  usernameErrorMessage = 'your username must be 4 characters long';
  passwordErrorMessage = `your password length has to be greater than 6`

  constructor(
    private user: UserService,
    private router: Router
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
    if (password !== confirm) {
      this.form.form.controls['password'].setErrors({'incorrect': true});
      this.passwordErrorMessage = `the passwords you've entered don't match. please try again`
    } else {
      this.router.navigate(['login']);
      this.user.postNewUser(username, password).subscribe();
    }
  };
};