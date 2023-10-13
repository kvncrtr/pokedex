import { Directive, OnInit, forwardRef, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl, ValidationErrors } from "@angular/forms";

@Directive({
   selector: '[confirmPassword]',
   providers: [
      {provide: NG_VALIDATORS, useExisting: confirmPasswordDirective, multi: true}
   ]
})
export class confirmPasswordDirective implements Validator, OnInit {
   @Input("password") initPassword!: string;

   ngOnInit(): void {
      control.valueChanges.subscribe((value) => {
         console.log(value);
       });  
   }

   validate(control: FormControl): ValidationErrors | null {
      if (control.value) {
         console.log(control.value)
         return {passwordMismatch: true };
      }
      return null;
   }
};

/*

I dont see anything in the console

export class confirmPasswordDirective implements Validator, OnInit {
   @Input("password") initPassword!: string;

   ngOnInit(): void {}

   validate(control: FormControl): ValidationErrors | null {
      if (control.value) {
         console.log(control.value)
         return {passwordMismatch: true };
      }
      return null;
   }
};

*/ 