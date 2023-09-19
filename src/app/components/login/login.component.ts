import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, catchError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') useForm = NgForm;

  constructor(
    private auth: AuthService,
    private storage: StorageService,
    private router: Router
  ) {}
    
   onSubmit(loginForm: NgForm) {
    const withIsValid = {
      ...loginForm.value,
      isValid: false
    };
    this.auth.authenticate(withIsValid)
    this.auth.formElement = this.useForm
  }
}