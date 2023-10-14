import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  confirmIsValid = false;

  constructor(
    private user: UserService
  ) {};

  ngOnInit(): void {};

  onSubmit(form: NgForm) {
    let formCopy = null;
    formCopy = {...form.value};
    this.passwordMatching(formCopy.password, formCopy.confirm );
  };

  usernameAvalibility() {
    // gather all username from firebase
    // see if the username that was submitted was used in any part of the array
    // if password was used then make the form field invalid
      // notify the user that the username has been taken 
    // else flip valid username to ture and pass the the username to a post request to save user

  };
  
  passwordMatching(password: any, confirm: any) {
    this.user.getAllUsers().subscribe();
    // console.log(password, confirm);
    // check if the password matches the confirmed password

    // if true then switch username validator to true
  };
}
